import React from 'react';
import { Navbar } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import PropTypes from "prop-types";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { useUncontrolled } from 'uncontrollable';

type SidebarMenuNavbarProps = BsPrefixProps & Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> & {
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
    as: Component = 'nav',
    onToggle,
    bg,
    ...controlledProps 
  } = useUncontrolled(props, {
    expanded: 'onToggle',
  });

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'navbar');

  return <Component {...props} ref={ref}>

  </Component>;
});

//SidebarMenuNavbar.propTypes = propTypes;
SidebarMenuNavbar.displayName = "SidebarMenuNavbar";

export default Object.assign(SidebarMenuNavbar, {
  Brand: Navbar.Brand,
  Collapse: Navbar.Collapse,
  Text: Navbar.Text,
  Toggle: Navbar.Toggle
});