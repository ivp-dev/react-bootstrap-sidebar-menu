import React, { useContext, useMemo } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuSubContext, { SidebarMenuSubContextProps } from './sidebar-menu-sub-context';
import SidebarMenuSubToggle from './sidebar-menu-sub-toggle';
import SidebarMenuSubCollapse from './sidebar-menu-sub-collapse';
import classNames from 'classnames';
import { EventKey } from 'react-bootstrap/types';
import SidebarMenuNode from './sidebar-menu-node';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNodeContext from './sidebar-menu-node-context';
import { SidebarMenuContext } from '.';

type SidebarMenuSubProps = BsPrefixProps & Omit<NavbarProps,
  'sticky' | 'bg' | 'variant' | 'fixed' | 'expand' | 'collapseOnSelect' | 'onSelect' | 'role'
> & {
  eventKey?: EventKey
  activeNodeKey?: EventKey
  onNodeSelect?: (eventKey?: EventKey | null) => void
};

const propTypes = {

  /**
   * Set a custom element for this component.
   */
  as: PropTypes.elementType,

  /**
   * A callback fired when the `<SidebarMenuSub>` body collapses or expands. Fired when
   * a `<SidebarMenuSub.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,

  /**
   * Controls the visiblity of the submenu body
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,

  /**
   * The ARIA role for the SidebarMenuSub.
   *
   * @default 'navigation'
   */
  role: PropTypes.string
};

const SidebarMenuSub: BsPrefixRefForwardingComponent<'div', SidebarMenuSubProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: Component = 'div',
  eventKey,
  className,
  ...props
}: SidebarMenuSubProps, ref) => {

  const {
    activeNodeKey,
    onNodeSelect
  } = useUncontrolled(props, {
    activeNodeKey: 'onNodeSelect'
  })

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-sub');

  const subContext = useMemo<SidebarMenuSubContextProps>(
    () => ({
      bsPrefix,
      eventKey
    }),
    [bsPrefix, eventKey]
  );

  const { activeNodeKey: parentActiveNodeKey, onSelect: onParentNodeSelect } = useContext(SidebarMenuNodeContext);
  const { exclusiveExpand } = useContext(SidebarMenuContext)
  console.log(`sidebar-menu-sub eventKey - ${eventKey} parentActiveNodeKey - ${parentActiveNodeKey}`)

  const onSelectInternal = (selectedKey?: EventKey | null) => {
    if(exclusiveExpand) {
      onParentNodeSelect?.(selectedKey);
    } else {
      onNodeSelect?.(selectedKey);
    }
  }

  return <SidebarMenuSubContext.Provider value={subContext}>
    <SidebarMenuNode activeNodeKey={parentActiveNodeKey} onSelect={onSelectInternal} with={Component} ref={ref} className={classNames(className, bsPrefix)} {...props} />
  </SidebarMenuSubContext.Provider>;
});

SidebarMenuSub.displayName = "SidebarMenuSub";
SidebarMenuSub.propTypes = propTypes;

export default Object.assign(SidebarMenuSub, {
  Collapse: SidebarMenuSubCollapse,
  Toggle: SidebarMenuSubToggle
});

