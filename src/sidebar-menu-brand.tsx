import React from 'react';
import { NavbarBrand, NavbarBrandProps } from "react-bootstrap";

type SidebarMenuBrand = NavbarBrand;

type SidebarMenuBrandProps = NavbarBrandProps

const SidebarMenuBrand: SidebarMenuBrand = React.forwardRef((props: SidebarMenuBrandProps, ref) => <NavbarBrand {...props} ref={ref} />)

SidebarMenuBrand.displayName = "SidebarMenuBrand"

export default SidebarMenuBrand;