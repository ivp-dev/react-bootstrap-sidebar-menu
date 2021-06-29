import React, { useContext } from 'react';
import { NavLink, NavLinkProps } from "react-bootstrap";
import AbstractNavItem from 'react-bootstrap/AbstractNavItem'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import NavbarContext from 'react-bootstrap/NavbarContext';
import NavContext from 'react-bootstrap/NavContext'
import { makeEventKey } from 'react-bootstrap/SelectableContext'
import classNames from 'classnames';

type SidebarMenuNavLinkProps = NavLinkProps

const SidebarMenuNavLink: BsPrefixRefForwardingComponent<'a', SidebarMenuNavLinkProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: As = 'a',
  className,
  disabled,
  active,
  href,
  ...props
}: SidebarMenuNavLinkProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');

  const navContext = useContext(NavContext);
  const navbarContext = useContext(NavbarContext);
  const navKey = makeEventKey(href);

  if (navContext) {
    const isActive = active == null && navKey != null
      ? navContext.activeKey === navKey
      : active;

    if (navbarContext && !navbarContext.expanded && isActive) {
      console.log("should be expanded")
    }
  }

  return (
    <AbstractNavItem
      ref={ref}
      as={As}
      href={href}
      disabled={disabled}
      active={active}
      className={classNames(className, bsPrefix, disabled && 'disabled')}
      {...props}
    />
  );
})

SidebarMenuNavLink.displayName = "SidebarMenuNavLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;