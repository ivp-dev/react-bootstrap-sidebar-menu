import React, { } from 'react';
import { Nav, NavItem, NavLink, NavProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

import { default as NavTitle } from './sidebar-menu-nav-title';
import { default as NavIcon } from './sidebar-menu-nav-icon';

type SidebarMenuNavProps = Omit<NavProps, 'variant' | 'cardHeaderBsPrefix'>;

const SidebarMenuNav: BsPrefixRefForwardingComponent<'nav', SidebarMenuNavProps> = React.forwardRef(({
  ...props
}: SidebarMenuNavProps, ref) => {
  return <Nav ref={ref} {...props} />;
});

SidebarMenuNav.displayName = 'SidebarMenuNav';
SidebarMenuNav.defaultProps = Nav.defaultProps;
SidebarMenuNav.propTypes = Nav.propTypes;

export default Object.assign(SidebarMenuNav, {
  Item: NavItem,
  Link: NavLink,
  Icon: NavIcon,
  Title: NavTitle
});