import React, { useCallback } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/helpers';
import SelectableContext from 'react-bootstrap/SelectableContext'
import ThemeProvider, { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuToggle from './sidebar-menu-toggler';
import SidebarMenuCollapse from './sidebar-menu-collapse'
import SidebarMenuNav from './sidebar-menu-nav'
import SidebarMenuBrand from './sidebar-menu-brand'
import classNames from 'classnames';
import { SidebarMenuContext, SidebarMenuContextProps } from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbar from './sidebar-menu-navbar';
import SidebarMenuHeader from './sidebar-menu-header';
import SidebarMenuFooter from './sidebar-menu-footer';
import PropTypes from "prop-types";


type SidebarMenuProps = Omit<NavbarProps, "sticky" | "fixed"> & {
  rtl?: boolean;
  width?: number | string;
  hide?: boolean | 'sm' | 'md' | 'lg' | 'xl';
};

const propTypes = {
  /** @default 'navbar' */
  bsPrefix: PropTypes.string,

  /**
   * The general visual variant a the Navbar.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: PropTypes.string,

  /**
   * The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']).isRequired,

  /**
  * The breakpoint, below which, the Navbar will hide.
  * When `true` the Navbar will always be expanded regardless of screen size.
  */
  hide: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']).isRequired,

  /**
   * Controls the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,

  /**
   * A convenience prop for adding `bg-*` utility classes since they are so commonly used here.
   * `light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: PropTypes.string,

  /**
   * Set a custom element for this component.
   */
  as: PropTypes.elementType,

  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,

  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  eventKey: mixed,
   *  event?: SyntheticEvent
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: PropTypes.func,

  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: PropTypes.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * Navbars whose `as` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: PropTypes.string,
};

const defaultProps = {
  expand: true,
  variant: 'light' as const,
  collapseOnSelect: false
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

const SidebarMenu: BsPrefixRefForwardingComponent<'aside', SidebarMenuProps> = React.forwardRef((props: SidebarMenuProps, ref) => {
  const {
    expanded = true,
    bsPrefix: initialBsPrefix,
    collapseOnSelect,
    expand,
    hide,    
    className,
    children,
    variant,
    onToggle,
    onSelect,
    bg,
    rtl,
    as: Component = 'aside',
    ...controlledProps } = useUncontrolled(props, {
      expanded: 'onToggle',
    });

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu');

  const handleCollapse = useCallback<SelectCallback>(
    (...args) => {
      onSelect?.(...args);
      if (collapseOnSelect && expanded) {
        onToggle?.(false);
      }
    },
    [onSelect, collapseOnSelect, expanded, onToggle],
  );

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') {
    expandClass = `${expandClass}-${expand}`;
  }

  let hideClass = `${bsPrefix}-hide`;
  if (typeof hide === 'string') {
    hideClass = `${hideClass}-${hide}`;
  }

  const sidebarMenuContext = React.useMemo<SidebarMenuContextProps>(() => ({
    expanded: !!expanded,
    rtl: !!rtl,
    onToggle: () => onToggle?.(!expanded),
  }), [expanded, onToggle, rtl]);



  return (
    <SidebarMenuContext.Provider value={sidebarMenuContext}>
      <SelectableContext.Provider value={handleCollapse}>
        <Component
          ref={ref}
          {...controlledProps}
          className={classNames(
            className,
            bsPrefix,
            hide && hideClass,
            expand && expandClass,
            expanded && 'show',
            variant && `${bsPrefix}-${variant}`,
            bg && `bg-${bg}`,
          )}>
          <ThemeProvider prefixes={prefixes}>
            {children}
          </ThemeProvider>
        </Component>
      </SelectableContext.Provider>
    </SidebarMenuContext.Provider>
  )
});

SidebarMenu.displayName = "SidebarMenu";
SidebarMenu.defaultProps = defaultProps;
SidebarMenu.propTypes = propTypes;

export default Object.assign(SidebarMenu, {
  Nav: SidebarMenuNav,
  Navbar: SidebarMenuNavbar,
  Brand: SidebarMenuBrand,
  Collapse: SidebarMenuCollapse,
  Toggle: SidebarMenuToggle,
  Header: SidebarMenuHeader,
  Footer: SidebarMenuFooter
});