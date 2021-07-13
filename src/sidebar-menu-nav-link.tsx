import React, { useContext, useEffect, useRef } from 'react';
import { NavLink, NavLinkProps } from "react-bootstrap";
import AbstractNavItem from 'react-bootstrap/AbstractNavItem'
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import SidebarMenuNavbarContext, { SidebarMenuNavbarContextType } from './sidebar-menu-navbar-context';
import NavContext from 'react-bootstrap/NavContext';
import { makeEventKey } from 'react-bootstrap/SelectableContext';
import classNames from 'classnames';
import SidebarMenuContext from './sidebar-menu-context';

type SidebarMenuNavLinkProps = NavLinkProps

const SidebarMenuNavLink: BsPrefixRefForwardingComponent<'a', SidebarMenuNavLinkProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: As = 'a',
  className,
  eventKey,
  active,
  href,
  disabled,
  ...props
}: SidebarMenuNavLinkProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');

  const sidebarMenuNavbarContext = useContext(SidebarMenuNavbarContext);
  const navContext = useContext(NavContext);
  const navKey = makeEventKey(eventKey, href);

  const { toggleStayExpanded, onToggleSelect } = useContext(SidebarMenuContext);

  const isExpandable = !!sidebarMenuNavbarContext;
  const isExpanded = !!sidebarMenuNavbarContext?.expanded;

  const isActive = active == null && navKey != null
    ? navContext && navContext.activeKey === navKey
    : active;

  const isExpandedRef = useRef<boolean>(isExpanded);
  const navbarContextRef = useRef<SidebarMenuNavbarContextType | null>();

  navbarContextRef.current = sidebarMenuNavbarContext;

  useEffect(() => {
    isExpandedRef.current = isExpanded;
  }, [isExpanded]);

  useEffect(() => {
    if (isExpandable && isActive && !isExpandedRef.current) {
      if(toggleStayExpanded) {
        navbarContextRef.current?.onToggle();
      } else {
        onToggleSelect?.(navbarContextRef.current?.eventKey ?? null)
      }
    }
  }, [isActive, isExpandable, onToggleSelect, toggleStayExpanded]);

  return (
    <AbstractNavItem
      ref={ref}
      as={As}
      href={href}
      tabIndex={-1}
      active={active}
      eventKey={eventKey}
      disabled={disabled}
      className={classNames(className, bsPrefix, disabled && 'disabled')}
      {...props}
    />
  );
})

SidebarMenuNavLink.displayName = "SidebarMenuNavLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;