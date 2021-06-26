import React from 'react';
import NavbarToggle, { NavbarToggleProps } from "react-bootstrap/NavbarToggle";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

type SidebarMenuNavbarToggle = NavbarToggle;

type SidebarMenuNavbarToggleProps = NavbarToggleProps

const SidebarMenuNavbarToggle: SidebarMenuNavbarToggle = React.forwardRef(({ bsPrefix: initialBsPrefix, ...props }: SidebarMenuNavbarToggleProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar-toggler');

  return <NavbarToggle ref={ref} bsPrefix={bsPrefix} {...props} />;
})

SidebarMenuNavbarToggle.displayName = "SidebarMenuNavbarToggle";
SidebarMenuNavbarToggle.propTypes = NavbarToggle.propTypes;
SidebarMenuNavbarToggle.defaultProps = NavbarToggle.defaultProps;

export default SidebarMenuNavbarToggle;