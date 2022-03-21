import React, { useContext, useEffect } from 'react';
import { NavLink, NavLinkProps } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import NavContext from 'react-bootstrap/NavContext';
import { makeEventKey } from '@restart/ui/SelectableContext';
import { useNavItem } from '@restart/ui/NavItem'
import Anchor from '@restart/ui/Anchor';
import classNames from 'classnames';
import SidebarMenuNodeContext from './sidebar-menu-node-context';

type SidebarMenuNavLinkProps = NavLinkProps

const SidebarMenuNavLink: BsPrefixRefForwardingComponent<'a', SidebarMenuNavLinkProps> = React.forwardRef(({
  bsPrefix: initialBsPrefix,
  as: Component = Anchor,
  className,
  eventKey,
  active,
  href,
  disabled,
  ...props
}: SidebarMenuNavLinkProps, ref) => {
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-nav-link');
  const nodeContext = useContext(SidebarMenuNodeContext)
  const navContext = useContext(NavContext);

  const navKey = makeEventKey(eventKey, href);

  const isActive = active == null && navKey != null
    ? navContext && navContext.activeKey === navKey
    : active;

  useEffect(() => {
    if (isActive) nodeContext.onActiveKeyChanged?.(navKey);
  }, [isActive, navKey, nodeContext]);

  const [navItemProps, meta] = useNavItem({
    key: navKey,
    active,
    ...props,
  });

  return <Component
    {...props}
    {...navItemProps}
    ref={ref}
    className={classNames(
      className,
      bsPrefix,
      disabled && 'disabled',
      meta.isActive && 'active',
    )}
  />
})

SidebarMenuNavLink.displayName = "SidebarMenuNavLink";
SidebarMenuNavLink.propTypes = NavLink.propTypes;
SidebarMenuNavLink.defaultProps = NavLink.defaultProps;

export default SidebarMenuNavLink;