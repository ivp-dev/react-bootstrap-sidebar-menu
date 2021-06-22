import React, { useCallback, useMemo } from 'react';
import { Navbar, NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/esm/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { useUncontrolled } from 'uncontrollable';
import SelectableContext from 'react-bootstrap/esm/SelectableContext';
import NavbarContext, { NavbarContextType } from 'react-bootstrap/esm/NavbarContext';
import classNames from 'classnames';

type SidebarMenuNavbarProps = BsPrefixProps & Omit<NavbarProps,
  'sticky' | 'bg' | 'variant' | 'fixed' | 'expand'
> & {
  onToggle?: (expanded: boolean) => void;
  expanded?: boolean;
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

  collapseOnSelect: PropTypes.bool,
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
  role: PropTypes.string,

  className: PropTypes.string
};

const defaultProps = {
  expand: false,
  collapseOnSelect: false,
};

const SidebarMenuNavbar: BsPrefixRefForwardingComponent<'nav', SidebarMenuNavbarProps> = React.forwardRef<HTMLElement, SidebarMenuNavbarProps>((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    as: Component = 'nav',
    collapseOnSelect,
    expanded,
    onSelect,
    onToggle,
    className,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: 'onToggle',
  });

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar');

  const navbarContext = useMemo<NavbarContextType>(
    () => ({
      onToggle: () => onToggle?.(!expanded),
      bsPrefix,
      expanded: !!expanded,
    }),
    [bsPrefix, expanded, onToggle],
  );

  const handleCollapse = useCallback<SelectCallback>(
    (...args) => {
      onSelect?.(...args);
      if (collapseOnSelect && expanded) {
        onToggle?.(false);
      }
    },
    [onSelect, collapseOnSelect, expanded, onToggle],
  );

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  return <NavbarContext.Provider value={navbarContext}>
    <SelectableContext.Provider value={handleCollapse}>
      <Component
        ref={ref}
        {...controlledProps}
        className={classNames(className, bsPrefix)} />
    </SelectableContext.Provider>
  </NavbarContext.Provider>;
});

SidebarMenuNavbar.displayName = "SidebarMenuNavbar";
SidebarMenuNavbar.defaultProps = defaultProps;
SidebarMenuNavbar.propTypes = propTypes;

export default Object.assign(SidebarMenuNavbar, {
  Brand: Navbar.Brand,
  Collapse: Navbar.Collapse,
  Text: Navbar.Text,
  Toggle: Navbar.Toggle
});