import React from 'react';
import { CollapseProps, NavbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/helpers';
import SelectableContext from 'react-bootstrap/SelectableContext'
import ThemeProvider, { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuToggle from './sidebar-menu-toggle';
import SidebarMenuCollapse from './sidebar-menu-collapse'
import SidebarMenuNav from './sidebar-menu-nav'
import SidebarMenuBrand from './sidebar-menu-brand'
import classNames from 'classnames';
import { SidebarMenuContext, SidebarMenuContextProps } from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbar from './sidebar-menu-navbar';
import SidebarMenuHeader from './sidebar-menu-header';
import SidebarMenuFooter from './sidebar-menu-footer';
import { Collapse } from "react-bootstrap";

type SidebarMenuProps = Omit<CollapseProps, "children" | "getDimensionValue"> & Omit<NavbarProps, "onSelect" | "sticky" | "fixed"> & {
  rtl?: boolean
  width?: number | string
  collapsed?: boolean
  getDimensionValue?: ((el: HTMLElement) => number) | string | number
};

type SidebarMenu = BsPrefixRefForwardingComponent<'div', SidebarMenuProps> & {
  Nav: typeof SidebarMenuNav,
  Navbar: typeof SidebarMenuNavbar,
  Brand: typeof SidebarMenuBrand,
  Collapse: typeof SidebarMenuCollapse,
  Toggle: typeof SidebarMenuToggle,
  Header: typeof SidebarMenuHeader,
  Footer: typeof SidebarMenuFooter
};

const prefixes = {
  "nav": "sidebar-menu-nav",
  "nav-item": "sidebar-menu-nav-item",
  "navbar": "sidebar-menu-navbar",
  "navbar-toggler": "sidebar-menu-navbar-toggle",
  "navbar-brand": "sidebar-menu-brand",
  "navbar-collapse": "sidebar-menu-navbar-collapse",
  "navbar-text": "sidebar-menu-navbar-text",
  "nav-link": "sidebar-menu-nav-link"
}

const SidebarMenu = React.forwardRef((props: SidebarMenuProps, ref) => {
  const {
    expanded = true,
    dimension = "width",
    bsPrefix: initialBsPrefix,
    getDimensionValue,
    mountOnEnter,
    unmountOnExit,
    className,
    children,
    appear,
    onToggle,
    timeout,
    expand,
    width,
    rtl,
    as: Component = 'aside',
    ...controlledProps } = useUncontrolled(props, {
      expanded: 'onToggle',
    });

  const prefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu');
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

  //TODO: get prefixes from external theme provider and merge with existed

  const handleCollapse = React.useCallback<SelectCallback>(() => {
    if (expanded) {
      onToggle?.(false);
    }
  }, [expanded, onToggle]);

  const handleEntering = React.useMemo(
    () => (elem: HTMLElement) => {
      if (typeof getDimensionValue === 'function') {
        elem.style[computedDimension] = `${getDimensionValue(elem)}px`;
      } else if (typeof getDimensionValue === 'number') {
        elem.style[computedDimension] = `${getDimensionValue}px`;
      } else if (typeof getDimensionValue === 'string') {
        elem.style[computedDimension] = `${getDimensionValue}`;
      }
    },
    [computedDimension, getDimensionValue],
  );

  const sidebarMenuContext = React.useMemo<SidebarMenuContextProps>(() => ({
    expanded: !!expanded,
    rtl: !!rtl,
    onToggle: () => onToggle && onToggle(!expanded),
  }), [expanded, onToggle, rtl]);


  return (
    <SidebarMenuContext.Provider value={sidebarMenuContext}>
      <SelectableContext.Provider value={handleCollapse}>
        <Collapse mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit} dimension={dimension} onEntering={handleEntering} in={expanded} timeout={timeout} appear={appear}>
          <Component ref={ref} className={classNames(className, prefix)} {...controlledProps}>
            <ThemeProvider prefixes={prefixes}>
              {children}
            </ThemeProvider>
          </Component>
        </Collapse>
      </SelectableContext.Provider>
    </SidebarMenuContext.Provider>
  )
});

export default Object.assign(SidebarMenu, {
  Nav: SidebarMenuNav,
  Navbar: SidebarMenuNavbar,
  Brand: SidebarMenuBrand,
  Collapse: SidebarMenuCollapse,
  Toggle: SidebarMenuToggle,
  Header: SidebarMenuHeader,
  Footer: SidebarMenuFooter
});