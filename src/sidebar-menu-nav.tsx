import React, { } from 'react';
import { Nav, NavItem, NavLink, NavProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import SidebarMenuNavIcon from './sidebar-menu-nav-icon'
import SidebarMenuNavTitle from './sidebar-menu-nav-title'

type SidebarMenuNavProps = Omit<NavProps, "variant">

type SidebarMenuNav = BsPrefixRefForwardingComponent<'div', SidebarMenuNavProps> & {
  Item: typeof NavItem;
  Link: typeof NavLink;
  Icon: typeof SidebarMenuNavIcon,
  Title: typeof SidebarMenuNavTitle
}

const SidebarMenuNav = React.forwardRef(({ as = "div", ...props }: SidebarMenuNavProps, ref) => <Nav ref={ref} as={as} {...props} />)

SidebarMenuNav.displayName = "SidebarMenuNav"

export default Object.assign(SidebarMenuNav, {
  Item: NavItem,
  Link: NavLink,
  Icon: SidebarMenuNavIcon,
  Title: SidebarMenuNavTitle
});