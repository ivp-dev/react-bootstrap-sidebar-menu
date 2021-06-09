import React, { } from 'react';
import { Nav, NavProps } from "react-bootstrap";
import SidebarMenuNavIcon from './sidebar-menu-nav-icon'
import SidebarMenuNavTitle from './sidebar-menu-nav-title'

type SidebarMenuNav = Nav & {
  Icon: typeof SidebarMenuNavIcon,
  Title: typeof SidebarMenuNavTitle
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarMenuNav: SidebarMenuNav =
  (React.forwardRef(({ as = "div", ...props }: NavProps, ref) => <Nav ref={ref} as={as} {...props} />) as unknown) as SidebarMenuNav;

SidebarMenuNav.Item = Nav.Item;
SidebarMenuNav.Link = Nav.Link;
SidebarMenuNav.Title = SidebarMenuNavTitle;
SidebarMenuNav.Icon = SidebarMenuNavIcon;

export default SidebarMenuNav;