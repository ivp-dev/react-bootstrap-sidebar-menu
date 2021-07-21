import React, { useContext, useEffect, useRef } from 'react';
import { NavLink, NavLinkProps } from "react-bootstrap";
import AbstractNavItem from 'react-bootstrap/AbstractNavItem'
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import SidebarMenuSubContext, { SidebarMenuSubContextProps } from './sidebar-menu-sub-context';
import NavContext from 'react-bootstrap/NavContext';
import { makeEventKey } from 'react-bootstrap/SelectableContext';
import classNames from 'classnames';
import SidebarMenuContext from './sidebar-menu-context';
import SidebarMenuNodeContext from './sidebar-menu-node-context';

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

  const subContext = useContext(SidebarMenuSubContext);

  const nodeContext = useContext(SidebarMenuNodeContext)

  const navContext = useContext(NavContext);
  const navKey = makeEventKey(eventKey, href);

  const { exclusiveExpand } = useContext(SidebarMenuContext);

  const isExpandable = !!subContext;
  const isExpanded = !!subContext?.expanded;

  const isActive = active == null && navKey != null
    ? navContext && navContext.activeKey === navKey
    : active;

  const isExpandedRef = useRef<boolean>(isExpanded);

  const subContextRef = useRef<SidebarMenuSubContextProps>();
  subContextRef.current = subContext;

  if (isActive) {
    subContext.bubble?.()
    //nodeContext.bubble?.()
  }

  useEffect(() => {
    isExpandedRef.current = isExpanded;
  }, [isExpanded]);

  useEffect(() => {
    if (isExpandable && isActive && !isExpandedRef.current) {
      if (!exclusiveExpand) {
        subContextRef.current?.onToggle?.();
      } else {
        subContextRef.current?.onSelect?.(subContextRef.current?.eventKey ?? null)
      }
    }
  }, [isActive, isExpandable, exclusiveExpand]);

  return (
    <AbstractNavItem
      ref={ref}
      as={As}
      href={href}
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