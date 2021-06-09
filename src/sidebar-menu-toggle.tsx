import { useEventCallback } from "@restart/hooks";
import classNames from "classnames";
import React, { useContext } from "react"
import { BsPrefixPropsWithChildren } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"
import { SidebarMenuContext } from './sidebar-menu-context'

export type SidebarMenuToggleProps = BsPrefixPropsWithChildren & {

};

export type SidebarMenuToggle = React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement> & SidebarMenuToggleProps> & {};

// eslint-disable-next-line @typescript-eslint/no-redeclare
const SidebarMenuToggle: SidebarMenuToggle = React.forwardRef(({
  as: Component = 'button',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-toggler');

  const { onToggle, expanded } = useContext(SidebarMenuContext) || {};

  const handleClick = useEventCallback((e) => {
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    (props as any).type = 'button';
  }

  return <Component onClick={handleClick} ref={ref} {...props} className={classNames(className, bsPrefix, !expanded && 'collapsed')} >
    {children || <span className={`${bsPrefix}`} />}
  </Component>
});

export default SidebarMenuToggle;