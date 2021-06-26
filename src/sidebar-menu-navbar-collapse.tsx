import React from 'react';
import NavbarCollapse, { NavbarCollapseProps } from "react-bootstrap/NavbarCollapse";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

type SidebarMenuNavbarCollapse = typeof NavbarCollapse;

type SidebarMenuNavbarCollapseProps = NavbarCollapseProps

const SidebarMenuNavbarCollapse: SidebarMenuNavbarCollapse = React.forwardRef(({ bsPrefix: initialBsPrefix, ...props }: SidebarMenuNavbarCollapseProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar-collapse');

  return <NavbarCollapse ref={ref} bsPrefix={bsPrefix} {...props} />;
})

SidebarMenuNavbarCollapse.displayName = "SidebarMenuNavbarCollapse";
SidebarMenuNavbarCollapse.propTypes = NavbarCollapse.propTypes;
SidebarMenuNavbarCollapse.defaultProps = NavbarCollapse.defaultProps;

export default SidebarMenuNavbarCollapse;