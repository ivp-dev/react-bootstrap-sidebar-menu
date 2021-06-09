import React from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixPropsWithChildren, SelectCallback } from 'react-bootstrap/helpers';
import SelectableContext from 'react-bootstrap/SelectableContext'
import ThemeProvider, { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuToggle from './sidebar-menu-toggle';
import SidebarMenuCollapse from './sidebar-menu-collapse'
import SidebarMenuNav from './sidebar-menu-nav'
import SidebarMenuBrand from './sidebar-menu-brand'
import classNames from 'classnames';
import { SidebarMenuContext, SidebarMenuContextProps } from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbar from './sidebar-menu-navbar'

type SidebarMenuProps = BsPrefixPropsWithChildren & Omit<NavbarProps, "onSelect" | "sticky" | "fixed"> & {
  rtl?: boolean
  width?: number | string
  collapsed?: boolean
};

type SidebarMenu = React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement> & SidebarMenuProps> & {
  Nav: typeof SidebarMenuNav,
  Navbar: typeof SidebarMenuNavbar,
  Brand: typeof SidebarMenuBrand,
  Collapse: typeof SidebarMenuCollapse,
  Toggle: typeof SidebarMenuToggle
};

const prefixes = {
  "nav": "sidebar-menu-nav",
  "nav-item": "sidebar-menu-nav-item",
  "navbar": "sidebar-menu-navbar",
  "navbar-toggler": "sidebar-menu-navbar-toggler",
  "navbar-brand": "sidebar-menu-brand",
  "navbar-collapse": "sidebar-menu-navbar-collapse",
  "navbar-text": "sidebar-menu-navbar-text",
  "nav-link": "sidebar-menu-nav-link"
}

const SidebarMenu: SidebarMenu = (React.forwardRef((props: SidebarMenuProps, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    className,
    expanded = true,
    children,
    onToggle,
    expand,
    width,
    rtl,
    as: Component = 'nav',
    ...controlledProps } = useUncontrolled(props, {
      expanded: 'onToggle',
    });

  const prefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu');

  const handleCollapse = React.useCallback<SelectCallback>((...args) => {
    console.log(args)
  }, []);

  const sidebarMenuContext = React.useMemo<SidebarMenuContextProps>(() => ({
    expanded: !!expanded,
    rtl: !!rtl,
    onToggle: () => onToggle && onToggle(!expanded),
  }), [expanded, onToggle, rtl]);

  return (
    <SidebarMenuContext.Provider value={sidebarMenuContext}>
      <SelectableContext.Provider value={handleCollapse}>
        <Component ref={ref} className={classNames(className, !expanded && 'collapsed', prefix)} {...controlledProps}>
          <ThemeProvider prefixes={prefixes} children={children} />
        </Component>
      </SelectableContext.Provider>
    </SidebarMenuContext.Provider>)
}) as SidebarMenu);

SidebarMenu.Nav = SidebarMenuNav;
SidebarMenu.Navbar = SidebarMenuNavbar;
SidebarMenu.Brand = SidebarMenuBrand;
SidebarMenu.Collapse = SidebarMenuCollapse;
SidebarMenu.Toggle = SidebarMenuToggle;

export default SidebarMenu;