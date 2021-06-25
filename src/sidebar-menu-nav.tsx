import React from 'react';
import { NavItem, NavLink, NavProps } from 'react-bootstrap';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import classNames from 'classnames';
import { default as NavTitle } from './sidebar-menu-nav-title';
import { default as NavIcon } from './sidebar-menu-nav-icon';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

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
  Item: NavItem,
  Link: NavLink,
  Icon: NavIcon,
  Title: NavTitle
});