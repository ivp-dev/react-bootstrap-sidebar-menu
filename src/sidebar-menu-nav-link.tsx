import React, { useContext, useEffect } from 'react';
import { NavLink, NavLinkProps } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import NavContext from 'react-bootstrap/NavContext';
import { makeEventKey } from '@restart/ui/SelectableContext';
import classNames from 'classnames';
import SidebarMenuNodeContext from './sidebar-menu-node-context';
import BaseNavItem from './sidebar-menu-base-nav-item';
import { SelectCallback } from "@restart/ui/types";

interface SidebarMenuNavLinkProps extends Omit<NavLinkProps, 'onSelect'> {
  onSelect?: SelectCallback 
}

const defaultProps = {
  disabled: false,
  as: 'a',
};

const SidebarMenuNavLink: BsPrefixRefForwardingComponent<'a', SidebarMenuNavLinkProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: As = 'a',
  className,
  eventKey,
  onSelect,
  active,
  href,
  disabled,
  ...props
}: SidebarMenuNavLinkProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');
  const { onActiveKeyChanged } = useContext(SidebarMenuNodeContext)
  const navContext = useContext(NavContext);

  const navKey = makeEventKey(eventKey, href);

  const isActive = active == null && navKey != null
    ? navContext && navContext.activeKey === navKey
    : active;

  useEffect(() => {
    isActive && onActiveKeyChanged?.(navKey);
  }, [isActive, navKey, onActiveKeyChanged]);

  return <BaseNavItem
    ref={ref}
    as={As}
    href={href}
    active={active}
    eventKey={eventKey}
    disabled={disabled}
    onSelect={onSelect}
    className={classNames(className, bsPrefix, disabled && 'disabled')}
    {...props}
  />
})

SidebarMenuNavLink.displayName = "SidebarMenuNavLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;