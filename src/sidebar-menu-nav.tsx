import React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import classNames from 'classnames';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';

import PropTypes from "prop-types";

import SidebarMenuNavLink from './sidebar-menu-nav-link';
import SidebarMenuNavItem from './sidebar-menu-nav-item';
import SidebarMenuNavIcon from './sidebar-menu-nav-icon';
import SidebarMenuNavTitle from './sidebar-menu-nav-title';



const propTypes = {
  /** @default 'sidebar-menu-nav' */
  bsPrefix: PropTypes.string,

  /**
   * The underlying HTML element to use when rendering the SidebarMenuNav.
   *
   * @type {('input'|elementType)}
   */
  as: PropTypes.elementType,

  className: PropTypes.string
}

export interface SidebarMenuNavProps extends BsPrefixProps, React.InputHTMLAttributes<HTMLInputElement> {

}

const SidebarMenuNav: BsPrefixRefForwardingComponent<'div', BsPrefixProps> = React.forwardRef<HTMLElement, SidebarMenuNavProps>(({
  bsPrefix: initialBsPrefix,
  as: Component = 'div',
  className,
  ...props
}, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)} />;
});

SidebarMenuNav.displayName = 'SidebarMenuNav';
SidebarMenuNav.propTypes = propTypes;

export default Object.assign(SidebarMenuNav, {
  Item: SidebarMenuNavItem,
  Link: SidebarMenuNavLink,
  Icon: SidebarMenuNavIcon,
  Title: SidebarMenuNavTitle
});