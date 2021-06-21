import React, { useCallback, useMemo } from 'react';
import { Navbar, NavbarProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/esm/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { useUncontrolled } from 'uncontrollable';
import SelectableContext from 'react-bootstrap/esm/SelectableContext';
import NavbarContext, {NavbarContextType} from 'react-bootstrap/esm/NavbarContext';
import classNames from 'classnames';

type SidebarMenuNavbarProps = BsPrefixProps & Omit<NavbarProps, 'sticky'> & {
  bg?: string
  onToggle?: (expanded: boolean) => void;
  expanded?: boolean;
};

const propTypes = {
  bg: PropTypes.string,

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

  expand: PropTypes.bool,

  /**
   * The ARIA role for the SidebarMenuNavbar.
   *
   * @default 'navigation'
   */
  role: PropTypes.string
};

type SidebarMenuNavbar = BsPrefixRefForwardingComponent<'nav', SidebarMenuNavbarProps> & {
  Brand: typeof Navbar.Brand;
  Collapse: typeof Navbar.Collapse;
  Text: typeof Navbar.Text;
  Toggle: typeof Navbar.Toggle;
};

const SidebarMenuNavbar = React.forwardRef<HTMLElement, SidebarMenuNavbarProps>((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expanded,
    as: Component = 'nav',
    onSelect,
    collapseOnSelect,
    onToggle,
    className,
    bg,
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

  return <NavbarContext.Provider value={navbarContext}>
    <SelectableContext.Provider value={handleCollapse}>
      <Component 
        ref={ref} {...props}
        {...controlledProps}
        className={classNames(
          className,
          bsPrefix,
          bg && `bg-${bg}`
        )}/>
    </SelectableContext.Provider>
  </NavbarContext.Provider>;
});

//SidebarMenuNavbar.propTypes = propTypes;
SidebarMenuNavbar.displayName = "SidebarMenuNavbar";

export default Object.assign(SidebarMenuNavbar, {
  Brand: Navbar.Brand,
  Collapse: Navbar.Collapse,
  Text: Navbar.Text,
  Toggle: Navbar.Toggle
});