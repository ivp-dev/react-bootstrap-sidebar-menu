import React from 'react';
import { BsPrefixPropsWithChildren, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import classNames from 'classnames';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';

import PropTypes from "prop-types";

import SidebarMenuNavLink from './sidebar-menu-nav-link';
import SidebarMenuNavItem from './sidebar-menu-nav-item';
import SidebarMenuNavIcon from './sidebar-menu-nav-icon';
import SidebarMenuNavTitle from './sidebar-menu-nav-title';

type SidebarMenuNavProps = BsPrefixPropsWithChildren;

const propTypes = {
  /** @default 'sidebar-menu-nav' */
  bsPrefix: PropTypes.string
}

const SidebarMenuNav: BsPrefixRefForwardingComponent<'div', SidebarMenuNavProps> = React.forwardRef(({
  as: Component = "div",
  bsPrefix: initialBsPrefix,
  className,
  ...props
}: SidebarMenuNavProps, ref) => {

  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)}/>;
});

SidebarMenuNav.displayName = 'SidebarMenuNav';
SidebarMenuNav.propTypes = propTypes;

export default Object.assign(SidebarMenuNav, {
  Item: SidebarMenuNavItem,
  Link: SidebarMenuNavLink,
  Icon: SidebarMenuNavIcon,
  Title: SidebarMenuNavTitle
});