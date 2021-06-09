import React, { } from 'react';
import { Nav, NavProps } from "react-bootstrap";
import SidebarMenuNavIcon from './sidebar-menu-nav-icon'

type SidebarMenuNav = Nav & {
  Icon: typeof SidebarMenuNavIcon
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarMenuNav: SidebarMenuNav =
  (React.forwardRef(({ as = "div", ...props }: NavProps, ref) => <Nav ref={ref} as={as} {...props} />) as unknown) as SidebarMenuNav;

SidebarMenuNav.Item = Nav.Item;
SidebarMenuNav.Link = Nav.Link;
SidebarMenuNav.Icon = SidebarMenuNavIcon

export default SidebarMenuNav;