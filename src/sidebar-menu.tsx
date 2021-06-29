import React, { useCallback } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/helpers';
import SelectableContext from 'react-bootstrap/SelectableContext'
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuToggle from './sidebar-menu-toggle';
import SidebarMenuCollapse from './sidebar-menu-collapse'
import SidebarMenuNav from './sidebar-menu-nav'
import SidebarMenuBrand from './sidebar-menu-brand'
import classNames from 'classnames';
import { SidebarMenuContext, SidebarMenuContextProps } from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbar from './sidebar-menu-navbar';
import SidebarMenuHeader from './sidebar-menu-header';
import SidebarMenuBody from './sidebar-menu-body';
import SidebarMenuFooter from './sidebar-menu-footer';
import SidebarMenuText from './sidebar-menu-text';
import PropTypes from "prop-types";
import AbstractNav from 'react-bootstrap/AbstractNav';
import { EventKey } from 'react-bootstrap/esm/types';


type SidebarMenuProps = Omit<NavbarProps, "sticky" | "fixed"> & {
  rtl?: boolean;
  width?: number | string;
  activeKey?: EventKey;
  hide?: boolean | 'sm' | 'md' | 'lg' | 'xl';
};

const propTypes = {
  /** @default 'sidebar-menu' */
  bsPrefix: PropTypes.string,

  /**
   * The general visual variant a the SidebarMenu.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: PropTypes.string,

  /**
   * The breakpoint, below which, the SidebarMenu will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']).isRequired,

  /**
  * The breakpoint, below which, the SidebarMenu will hide.
  * When `true` the Navbar will always be expanded regardless of screen size.
  */
  hide: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']).isRequired,

  /**
   * Controls the visiblity of the sidebar body
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
   * A callback fired when the `<SidebarMenu>` body collapses or expands. Fired when
   * a `<SidebarMenu.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,

  /**
   * A callback fired when a descendant of a child `<SidebarMenuNav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<SidebarMenuNav>`. Does nothing if no `<SidebarMenuNav>` or `<SidebarMenuNav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<SidebarMenuNav>` descendant, and an event.
   *
   * ```js
   * function (
   *  eventKey: mixed,
   *  event?: SyntheticEvent
   * )
   * ```
   *
   * For basic closing behavior after all `<SidebarMenuNav>` descendant onSelect events in
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

  /**
 * Marks the NavItem with a matching `eventKey` (or `href` if present) as active.
 */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  expand: true,
  variant: 'light' as const,
  collapseOnSelect: false
};

const SidebarMenu: BsPrefixRefForwardingComponent<'aside', SidebarMenuProps> = React.forwardRef((props: SidebarMenuProps, ref) => {
  const {
    expanded = true,
    bsPrefix: initialBsPrefix,
    collapseOnSelect,
    expand,
    hide,
    className,
    activeKey,
    variant,
    onToggle,
    onSelect,
    bg,
    rtl,
    as: As = 'aside',
    ...controlledProps } = useUncontrolled(props, {
      expanded: 'onToggle',
      activeKey: 'onSelect'
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

  if (controlledProps.role === undefined && As !== 'nav') {
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
        <AbstractNav
          as={As}
          ref={ref}
          activeKey={activeKey}
          className={classNames(
            className,
            bsPrefix,
            hide && hideClass,
            expand && expandClass,
            expanded && 'show',
            variant && `${bsPrefix}-${variant}`,
            bg && `bg-${bg}`,
          )}
          {...controlledProps} />
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
  Body: SidebarMenuBody,
  Footer: SidebarMenuFooter,
  Text: SidebarMenuText
});