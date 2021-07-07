import React from 'react';
import { NavbarBrand, NavbarBrandProps } from "react-bootstrap";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';

type SidebarMenuBrand = NavbarBrand;

type SidebarMenuBrandProps = NavbarBrandProps

const SidebarMenuBrand: SidebarMenuBrand = React.forwardRef(({ bsPrefix: initialBsPrefix, ...props }: SidebarMenuBrandProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-brand');
  return <NavbarBrand ref={ref} bsPrefix={bsPrefix} {...props} />;
})

SidebarMenuBrand.displayName = "SidebarMenuBrand"

export default SidebarMenuBrand;