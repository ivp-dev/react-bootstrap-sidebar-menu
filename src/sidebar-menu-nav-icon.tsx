import classNames from "classnames";
import React from "react"
import { BsPrefixPropsWithChildren } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"

export type SidebarMenuNavIconProps = BsPrefixPropsWithChildren;

export type SidebarMenuNavIcon = React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement> & SidebarMenuNavIconProps> & {};

const SidebarMenuNavIcon: SidebarMenuNavIcon = React.forwardRef(({
  as: Component = 'span',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-nav-icon');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)} >
    {children || <span className={`${bsPrefix}-icon`} />}
  </Component>
});

export default SidebarMenuNavIcon;