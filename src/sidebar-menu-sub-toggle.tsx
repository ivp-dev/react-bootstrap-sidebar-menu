import React, { useCallback, useContext } from 'react';
import { EventKey } from 'react-bootstrap/types';
import NavbarToggle, { NavbarToggleProps } from "react-bootstrap/NavbarToggle";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuNodeContext from './sidebar-menu-node-context';
import SidebarMenuSubContext from './sidebar-menu-sub-context';
import useEventCallback from '@restart/hooks/useEventCallback';
import classNames from 'classnames';


type SidebarMenuSubToggleProps = NavbarToggleProps & {
  eventKey?: EventKey
}

const SidebarMenuSubToggle = React.forwardRef(
  ({
    bsPrefix: initialBsPrefix,
    onClick,
    className,
    as: Component = 'button',
    children,
    label,
    ...props
  }: SidebarMenuSubToggleProps, ref) => {

    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-sub-toggle');
    const { activeNode, onSelect, onToggle, expanded } = useContext(SidebarMenuNodeContext);
    const { eventKey } = useContext(SidebarMenuSubContext);

    const handleOnClick = useCallback(() => {
      const eventKeyPassed = eventKey === activeNode ? null : eventKey;
      onSelect?.(eventKeyPassed);
    }, [eventKey, activeNode, onSelect]);

    const handleClick = useEventCallback((e) => {
      onClick?.(e);
      onToggle?.();
      handleOnClick();
    });

    if (Component === 'button') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (props as any).type = 'button';
    }

    return (
      <Component
        {...props}
        ref={ref}
        onClick={handleClick}
        aria-label={label}
        className={classNames(className, bsPrefix, !expanded && 'collapsed')}
      >
        {children || <span className={`${bsPrefix}-icon`} />}
      </Component>
    );
  })

SidebarMenuSubToggle.displayName = "SidebarMenuSubToggle";
SidebarMenuSubToggle.propTypes = NavbarToggle.propTypes;
SidebarMenuSubToggle.defaultProps = NavbarToggle.defaultProps;

export default SidebarMenuSubToggle;
