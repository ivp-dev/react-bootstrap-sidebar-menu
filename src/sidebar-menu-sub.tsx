import React, { useContext, useEffect, useMemo, useState } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuSubContext, { SidebarMenuSubContextProps } from './sidebar-menu-sub-context';
import SidebarMenuSubToggle from './sidebar-menu-sub-toggle';
import SidebarMenuSubCollapse from './sidebar-menu-sub-collapse';
import classNames from 'classnames';
import { EventKey } from '@restart/ui/types';
import SidebarMenuNode from './sidebar-menu-node';
import SidebarMenuNodeContext from './sidebar-menu-node-context';
import SidebarMenuContext from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import createChainedFunction from 'react-bootstrap/createChainedFunction'
import NavContext from 'react-bootstrap/NavContext';

type SidebarMenuSubProps = BsPrefixProps & Omit<NavbarProps,
  'sticky' | 'bg' | 'variant' | 'fixed' | 'expand' | 'collapseOnSelect' | 'onSelect' | 'role'
> & {
  eventKey?: EventKey
  expanded?: boolean
  onToggle?: (expanded: boolean) => void
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
  role: PropTypes.string,

  /**
   * 
   */
  defaultExpanded: PropTypes.bool
};

const SidebarMenuSub: BsPrefixRefForwardingComponent<'div', SidebarMenuSubProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: Component = 'div',
  eventKey,
  className,
  ...props
}: SidebarMenuSubProps, ref) => {

  const {
    expanded,
    onToggle,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle'
  });

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-sub');

  const { activeKey: parentNodeActiveKey, onSelect: onParentSelect, onActiveKeyChanged: onParentActiveKeyChanged } = useContext(SidebarMenuNodeContext);
  const { exclusiveExpand } = useContext(SidebarMenuContext);

  const [activeKey, setActiveKey] = useState<string | null>(null);
  const navContext = useContext(NavContext);

  const currentActiveKey: EventKey | null = navContext?.activeKey ?? null;

  const subContextValue = useMemo<SidebarMenuSubContextProps>(() => ({
    bsPrefix,
    eventKey,
    onSelect: onParentSelect,
    activeKey: parentNodeActiveKey,
    onToggle: () => onToggle?.(!expanded),
    onActiveKeyChanged: onParentActiveKeyChanged,
    expanded: exclusiveExpand && typeof eventKey !== 'undefined' ? eventKey === parentNodeActiveKey : !!expanded,
  }), [bsPrefix, eventKey, exclusiveExpand, expanded, onParentSelect, onToggle, parentNodeActiveKey, onParentActiveKeyChanged]);

  const onActiveKeyChanged = useMemo(() => {
    return createChainedFunction((eventKey: string | null) => setActiveKey(eventKey), onParentActiveKeyChanged)
  }, [onParentActiveKeyChanged]);

  const activeKeyChangedCallback = useMemo(() => (currentActiveKey: EventKey | null) => {
    if (currentActiveKey && currentActiveKey === activeKey) {
      exclusiveExpand ? onParentSelect?.(eventKey) : onToggle?.(true);
    }
  }, [activeKey, eventKey, exclusiveExpand, onParentSelect, onToggle]);

  useEffect(() => {
    activeKeyChangedCallback(currentActiveKey);
  }, [currentActiveKey, activeKeyChangedCallback]);

  return <SidebarMenuSubContext.Provider value={subContextValue}>
    <SidebarMenuNode with={Component} ref={ref} onActiveKeyChanged={onActiveKeyChanged} className={classNames(className, bsPrefix)} {...controlledProps} />
  </SidebarMenuSubContext.Provider>;
});

SidebarMenuSub.displayName = "SidebarMenuSub";
SidebarMenuSub.propTypes = propTypes;

export default Object.assign(SidebarMenuSub, {
  Collapse: SidebarMenuSubCollapse,
  Toggle: SidebarMenuSubToggle
});