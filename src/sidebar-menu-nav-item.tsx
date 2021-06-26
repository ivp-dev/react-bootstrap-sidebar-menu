import React from 'react';
import { NavItem, NavItemProps } from "react-bootstrap";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

type SidebarMenuNavItem = NavItem;

type SidebarMenuNavItemProps = NavItemProps

const SidebarMenuNavItem: SidebarMenuNavItem = React.forwardRef(({ bsPrefix: initialBsPrefix, ...props }: SidebarMenuNavItemProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-item');

  return <NavItem ref={ref} bsPrefix={bsPrefix} {...props} />
})

SidebarMenuNavItem.displayName = "SidebarMenuItem";
SidebarMenuNavItem.propTypes = NavItem.propTypes;
SidebarMenuNavItem.defaultProps = NavItem.defaultProps;

export default SidebarMenuNavItem;