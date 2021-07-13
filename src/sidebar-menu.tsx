import React, { useCallback, useMemo } from 'react';
import { NavbarProps } from "react-bootstrap";
import { BsPrefixRefForwardingComponent, SelectCallback } from 'react-bootstrap/helpers';
import SelectableContext from 'react-bootstrap/SelectableContext'
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuToggle from './sidebar-menu-toggle';
import SidebarMenuCollapse from './sidebar-menu-collapse'
import SidebarMenuNav from './sidebar-menu-nav'
import SidebarMenuBrand from './sidebar-menu-brand'
import classNames from 'classnames';
import SidebarMenuContext, { SidebarMenuContextProps } from './sidebar-menu-context';
import { useUncontrolled } from 'uncontrollable';
import SidebarMenuNavbar from './sidebar-menu-navbar';
import SidebarMenuHeader from './sidebar-menu-header';
import SidebarMenuBody from './sidebar-menu-body';
import SidebarMenuFooter from './sidebar-menu-footer';
import SidebarMenuText from './sidebar-menu-text';
import PropTypes from 'prop-types';
import AbstractNav from 'react-bootstrap/AbstractNav';
import { EventKey } from 'react-bootstrap/types';

export type SidebarMenuProps = Omit<NavbarProps, "sticky" | "fixed"> & {
  rtl?: boolean
  activeKey?: EventKey
  toggleActiveKey?: EventKey
  hide?: boolean | 'sm' | 'md' | 'lg' | 'xl'
  toggleStayExpanded?: boolean
  defaultActiveKey?: EventKey
  defaultExpanded?: boolean
  onToggleSelect?: (eventKey: EventKey | null) => void;
};

const propTypes = {
  /** @default 'sidebar-menu' */
  bsPrefix: PropTypes.string,

  /**
   * The general visual variant of the SidebarMenu.
   * Use in combination with the `bg` prop, `background-color` utilities,
   * or your own background styles.
   *
   * @type {('light'|'dark')}
   */
  variant: PropTypes.string,

  /**
   * RTL direction.
   * 
   * @default false
   */
  rtl: PropTypes.bool,

  /**
   * The breakpoint, below which, the SidebarMenu will collapse.
   * When `true` the SidebarMenu will always be expanded regardless of screen size.
   */
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl', 'xxl']).isRequired,

  /**
  * The breakpoint, below which, the SidebarMenu will hide.
  * When `true` the SidebarMenu will always be hidden regardless of screen size.
  * 
  * * @default false
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
   * child `<SidebarMenu>` fires. Does nothing if no `<SidebarMenu>` or `<SidebarMenu>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after
   * the `select` event of `<SidebarMenu>` descendants.
   */
  collapseOnSelect: PropTypes.bool,

  /**
   * The ARIA role for the navbar, will default to 'navigation' for
   * SidebarMenu whose `as` is something other than `<nav>`.
   *
   * @default 'navigation'
   */
  role: PropTypes.string,

  /**
 * Marks the SidebarMenuNavItem with a matching `eventKey` (or `href` if present) as active.
 */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  rtl: false,
  expand: true,
  hide: false,
  variant: 'light' as const,
  collapseOnSelect: false,
  defaultExpanded: true
};

const SidebarMenu: BsPrefixRefForwardingComponent<'aside', SidebarMenuProps> = React.forwardRef((props: SidebarMenuProps, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    collapseOnSelect,
    toggleActiveKey,
    toggleStayExpanded,
    expanded,
    className,
    activeKey,
    variant,
    onToggle,
    onSelect,
    onToggleSelect,
    expand,
    hide,
    bg,
    rtl,
    as: As = 'aside',
    ...controlledProps } = useUncontrolled(props, {
      expanded: 'onToggle',
      activeKey: 'onSelect',
      toggleActiveKey: 'onToggleSelect'
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

  const sidebarMenuContextValue = useMemo<SidebarMenuContextProps>(() => ({
    rtl: !!rtl,
    expanded: !!expanded,
    onToggle: () => onToggle?.(!expanded),
    toggleStayExpanded,
    toggleActiveKey,
    onToggleSelect
  }), [expanded, onToggle, onToggleSelect, rtl, toggleActiveKey, toggleStayExpanded]);

  return (
    <SidebarMenuContext.Provider value={sidebarMenuContextValue}>
      <SelectableContext.Provider value={handleCollapse}>
        <AbstractNav
          as={As}
          ref={ref}
          tabIndex={0}
          activeKey={activeKey}
          className={classNames(
            className,
            bsPrefix,
            hide && hideClass,
            expand && expandClass,
            expanded && 'show',
            rtl && `${bsPrefix}-rtl`,
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