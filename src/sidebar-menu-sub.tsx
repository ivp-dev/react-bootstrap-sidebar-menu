import React, { useContext, useMemo } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuSubContext, { SidebarMenuSubContextType } from './sidebar-menu-sub-context';
import SidebarMenuSubToggle from './sidebar-menu-sub-toggle';
import SidebarMenuSubCollapse from './sidebar-menu-sub-collapse';
import classNames from 'classnames';
import { EventKey } from 'react-bootstrap/types';
import { SidebarMenuContext } from '.';

type SidebarMenuSubProps = BsPrefixProps & Omit<NavbarProps,
  'sticky' | 'bg' | 'variant' | 'fixed' | 'expand' | 'collapseOnSelect' | 'onSelect' | 'role'
> & {
  onToggle?: (expanded: boolean) => void
  expanded?: boolean
  eventKey?: EventKey
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

const SidebarMenuSub: BsPrefixRefForwardingComponent<'div', SidebarMenuSubProps> = React.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    as: Component = 'div',
    expanded,
    onToggle,
    eventKey,
    className,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle',
  });

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-sub');

  const { toggleActiveKey, exclusiveExpand } = useContext(SidebarMenuContext);
  
  const sidebarMenuSubContext = useMemo<SidebarMenuSubContextType>(
    () => ({
      bsPrefix,
      onToggle: () => onToggle?.(!expanded),
      expanded: exclusiveExpand ? toggleActiveKey === eventKey : !!expanded,
      eventKey
    }),
    [bsPrefix, eventKey, expanded, onToggle, toggleActiveKey, exclusiveExpand]
  );

  return <SidebarMenuSubContext.Provider value={sidebarMenuSubContext}>
    <Component
      ref={ref}
      {...controlledProps}
      className={classNames(className, bsPrefix)} />
  </SidebarMenuSubContext.Provider>;
});

SidebarMenuSub.displayName = "SidebarMenuSub";
SidebarMenuSub.propTypes = propTypes;

export default Object.assign(SidebarMenuSub, {
  Collapse: SidebarMenuSubCollapse,
  Toggle: SidebarMenuSubToggle
});

