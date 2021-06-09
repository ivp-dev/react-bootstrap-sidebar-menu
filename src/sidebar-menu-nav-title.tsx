import classNames from "classnames";
import React from "react"
import { BsPrefixPropsWithChildren } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"

export type SidebarMenuNavTitleProps = BsPrefixPropsWithChildren;

export type SidebarMenuNavTitle = React.ForwardRefExoticComponent<React.RefAttributes<HTMLElement> & SidebarMenuNavTitleProps> & {};

const SidebarMenuNavTitle: SidebarMenuNavTitle = React.forwardRef(({
  as: Component = 'span',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-nav-title');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)} >
    {children || <span className={`${bsPrefix}`} />}
  </Component>
});

export default SidebarMenuNavTitle;