import React, { useContext } from 'react';
import { EventKey } from 'react-bootstrap/types';
import NavbarToggle, { NavbarToggleProps } from "react-bootstrap/NavbarToggle";
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuContext from './sidebar-menu-context';
import SidebarMenuSubContext from './sidebar-menu-sub-context';
import useEventCallback from '@restart/hooks/useEventCallback';
import classNames from 'classnames';


type SidebarMenuSubToggleProps = NavbarToggleProps & {
  eventKey?: EventKey
}

export function useSidebarMenuSubToggle(
  eventKey: EventKey | null,
): () => void {
  const { toggleActiveKey, onToggleSelect } = useContext(SidebarMenuContext);

  return () => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed = eventKey === toggleActiveKey ? null : eventKey;
    onToggleSelect?.(eventKeyPassed);
  };
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
    const { onToggle, expanded, eventKey } = useContext(SidebarMenuSubContext) || {};
    const handlerOnClick = useSidebarMenuSubToggle(eventKey ?? null);
    
    const handleClick = useEventCallback((e) => {
      onClick?.(e);
      onToggle?.();
      handlerOnClick();
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

SidebarMenuSubToggle.displayName = "SidebarMenuSubToggle";
SidebarMenuSubToggle.propTypes = NavbarToggle.propTypes;
SidebarMenuSubToggle.defaultProps = NavbarToggle.defaultProps;

export default SidebarMenuSubToggle;
