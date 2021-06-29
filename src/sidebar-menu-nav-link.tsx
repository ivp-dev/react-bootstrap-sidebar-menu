import React, { useContext } from 'react';
import { NavLink, NavLinkProps } from "react-bootstrap";
import AbstractNavItem from 'react-bootstrap/AbstractNavItem' 
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import classNames from 'classnames';

type SidebarMenuNavLinkProps = NavLinkProps

const SidebarMenuNavLink: BsPrefixRefForwardingComponent<'a', SidebarMenuNavLinkProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: As = 'a',
  className,
  disabled,
  ...props
}: SidebarMenuNavLinkProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');

  return (
    <AbstractNavItem
      {...props}
      ref={ref}
      as={As}
      disabled={disabled}
      className={classNames(className, bsPrefix, disabled && 'disabled')}
    />
  );
})

SidebarMenuNavLink.displayName = "SidebarMenuNavLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;