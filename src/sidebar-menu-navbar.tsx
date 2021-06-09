import React from 'react';
import { Navbar, NavbarProps } from "react-bootstrap";

type SidebarMenuNavbar = Navbar;

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarMenuNavbar: SidebarMenuNavbar =
  (React.forwardRef(({ as = "div", ...props }: NavbarProps, ref) => <Navbar ref={ref} as={as} {...props} />) as unknown) as Navbar;

SidebarMenuNavbar.Brand = Navbar.Brand;
SidebarMenuNavbar.Collapse = Navbar.Collapse;
SidebarMenuNavbar.Text = Navbar.Text;
SidebarMenuNavbar.Toggle = Navbar.Toggle;

export default SidebarMenuNavbar;