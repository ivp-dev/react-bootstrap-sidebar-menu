import React, { useContext, useMemo } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbarContext, { SidebarMenuNavbarContextType } from './sidebar-menu-navbar-context';
import SidebarMenuNavbarToggle from './sidebar-menu-navbar-toggle';
import SidebarMenuNavbarCollapse from './sidebar-menu-navbar-collapse';
import classNames from 'classnames';
import { EventKey } from 'react-bootstrap/types';
import { SidebarMenuContext } from '.';

type SidebarMenuNavbarProps = BsPrefixProps & Omit<NavbarProps,
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
   * A callback fired when the `<SidebarMenuNavbar>` body collapses or expands. Fired when
   * a `<SidebarMenuNavbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,

  /**
   * The ARIA role for the SidebarMenuNavbar.
   *
   * @default 'navigation'
   */
  role: PropTypes.string
};

const SidebarMenuNavbar: BsPrefixRefForwardingComponent<'div', SidebarMenuNavbarProps> = React.forwardRef((props, ref) => {
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

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar');

  const { toggleActiveKey, toggleStayExpanded } = useContext(SidebarMenuContext);

  const sidebarMenuNavbarContext = useMemo<SidebarMenuNavbarContextType>(
    () => ({
      bsPrefix,
      onToggle: () => onToggle?.(!expanded),
      expanded: toggleStayExpanded ? !!expanded : toggleActiveKey === eventKey,
      eventKey
    }),
    [bsPrefix, eventKey, expanded, onToggle, toggleActiveKey, toggleStayExpanded]
  );

  console.log(toggleActiveKey)

  return <SidebarMenuNavbarContext.Provider value={sidebarMenuNavbarContext}>
    <Component
      ref={ref}
      {...controlledProps}
      className={classNames(className, bsPrefix)} />
  </SidebarMenuNavbarContext.Provider>;
});

SidebarMenuNavbar.displayName = "SidebarMenuNavbar";
SidebarMenuNavbar.propTypes = propTypes;

export default Object.assign(SidebarMenuNavbar, {
  Collapse: SidebarMenuNavbarCollapse,
  Toggle: SidebarMenuNavbarToggle
});

