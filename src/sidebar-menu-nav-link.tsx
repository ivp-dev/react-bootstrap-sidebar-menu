import React from 'react';
import { NavLink, NavLinkProps } from "react-bootstrap";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

type SidebarMenuNavLink = NavLink;

type SidebarMenuNavLinkProps = NavLinkProps

const SidebarMenuNavLink: SidebarMenuNavLink = React.forwardRef(({ bsPrefix: initialBsPrefix, ...props }: SidebarMenuNavLinkProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');

  return <NavLink ref={ref} bsPrefix={bsPrefix} {...props} />;
})

SidebarMenuNavLink.displayName = "SidebarMenuLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;