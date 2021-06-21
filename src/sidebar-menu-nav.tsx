import React, { } from 'react';
import { Nav, NavItem, NavLink, NavProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import { default as NavTitle } from './sidebar-menu-nav-title';
import { default as NavIcon } from './sidebar-menu-nav-icon'

type SidebarMenuNavProps = Omit<NavProps, 'variant' | 'cardHeaderBsPrefix'>;

type SidebarMenuNav = BsPrefixRefForwardingComponent<'div', SidebarMenuNavProps> & {
  Item: typeof NavItem;
  Link: typeof NavLink;
  Icon: typeof NavIcon,
  Title: typeof NavTitle
}

const SidebarMenuNav = React.forwardRef(({ ...props }: SidebarMenuNavProps, ref) => <Nav ref={ref} {...props} />);

SidebarMenuNav.displayName = 'SidebarMenuNav'

export default Object.assign(SidebarMenuNav, {
  Item: NavItem,
  Link: NavLink,
  Icon: NavIcon,
  Title: NavTitle
});