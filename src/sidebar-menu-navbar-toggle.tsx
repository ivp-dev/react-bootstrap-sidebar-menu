import React, { useContext } from 'react';
import { EventKey } from 'react-bootstrap/types';
import NavbarToggle, { NavbarToggleProps } from "react-bootstrap/NavbarToggle";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuContext from './sidebar-menu-context';
import { SidebarMenuNavbarContext } from '.';
import useEventCallback from '@restart/hooks/useEventCallback';
import classNames from 'classnames';


type EventHandler = React.EventHandler<React.SyntheticEvent>;

type SidebarMenuNavbarToggleProps = NavbarToggleProps & {
  eventKey?: EventKey
}

export function useSidebarMenuNavbarToggle(
  eventKey: EventKey | null,
  onClick?: EventHandler,
): EventHandler {
  const { toggleActiveKey, onToggleSelect } = useContext(SidebarMenuContext);

  return (e) => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed = eventKey === toggleActiveKey ? null : eventKey;

    if (onToggleSelect) onToggleSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}

const SidebarMenuNavbarToggle = React.forwardRef(
  ({
    bsPrefix: initialBsPrefix,
    onClick,
    eventKey,
    className,
    as: Component = 'button',
    children,
    label,
    ...props
  }: SidebarMenuNavbarToggleProps, ref) => {

    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar-toggler');

    const handlerOnClick = useSidebarMenuNavbarToggle(eventKey ?? null, onClick);

    const { onToggle, expanded } = useContext(SidebarMenuNavbarContext) || {};

    const handleClick = useEventCallback((e) => {
      handlerOnClick(e);
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    });

    if (Component === 'button') {
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

SidebarMenuNavbarToggle.displayName = "SidebarMenuNavbarToggle";
//SidebarMenuNavbarToggle.propTypes = NavbarToggle.propTypes;
//SidebarMenuNavbarToggle.defaultProps = NavbarToggle.defaultProps;

export default SidebarMenuNavbarToggle;
