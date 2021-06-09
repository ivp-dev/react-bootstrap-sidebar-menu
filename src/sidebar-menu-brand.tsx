import React from 'react';
import { NavbarBrand, NavbarBrandProps } from "react-bootstrap";

type SidebarMenuBrand = NavbarBrand;

type SidebarMenuBrandProps = NavbarBrandProps

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarMenuBrand =
  (React.forwardRef((props: SidebarMenuBrandProps, ref) => <NavbarBrand ref={ref} {...props} />) as unknown) as SidebarMenuBrand;

export default SidebarMenuBrand;