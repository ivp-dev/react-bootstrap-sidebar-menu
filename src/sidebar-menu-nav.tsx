import React from 'react';
import { NavProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import classNames from 'classnames';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

import SidebarMenuNavLink from './sidebar-menu-nav-link';
import SidebarMenuNavItem from './sidebar-menu-nav-item';
import SidebarMenuNavIcon from './sidebar-menu-nav-icon';
import SidebarMenuNavTitle from './sidebar-menu-nav-title';

type SidebarMenuNavProps = Omit<NavProps, 'variant' | 'cardHeaderBsPrefix' | 'navbarBsPrefix'>;

const SidebarMenuNav: BsPrefixRefForwardingComponent<'div', SidebarMenuNavProps> = React.forwardRef(({
  as: Component = "div",
  bsPrefix: initialBsPrefix,
  className,
  children, 
  ...props
}: SidebarMenuNavProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)}>
    {children}
  </Component>;
});

SidebarMenuNav.displayName = 'SidebarMenuNav';

export default Object.assign(SidebarMenuNav, {
  Item: SidebarMenuNavItem,
  Link: SidebarMenuNavLink,
  Icon: SidebarMenuNavIcon,
  Title: SidebarMenuNavTitle
});