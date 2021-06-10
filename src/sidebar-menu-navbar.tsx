import React from 'react';
import { Navbar, NavbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

type SidebarMenuNavProps = NavbarProps;

type SidebarMenuNavbar = BsPrefixRefForwardingComponent<'nav', SidebarMenuNavProps> & {
  Brand: typeof Navbar.Brand;
  Collapse: typeof Navbar.Collapse;
  Text: typeof Navbar.Text;
  Toggle: typeof Navbar.Toggle;
};

const SidebarMenuNavbar = React.forwardRef(({ as = "div", ...props }: SidebarMenuNavProps, ref) => <Navbar ref={ref} as={as} {...props} />);

SidebarMenuNavbar.propTypes = Navbar.propTypes;
SidebarMenuNavbar.displayName = "SidebarMenuNavbar";

export default Object.assign(SidebarMenuNavbar, {
  Brand: Navbar.Brand,
  Collapse: Navbar.Collapse,
  Text: Navbar.Text,
  Toggle: Navbar.Toggle
});