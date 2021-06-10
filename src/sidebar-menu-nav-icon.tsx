import classNames from "classnames";
import React from "react"
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"
import PropTypes from "prop-types";

export type SidebarMenuNavIconProps = BsPrefixProps & React.HTMLAttributes<HTMLElement>;

export type SidebarMenuNavIcon = BsPrefixRefForwardingComponent<'span', SidebarMenuNavIconProps>;

const propTypes = {
  /** @default 'sidebar-menu-nav-icon' */
  bsPrefix: PropTypes.string,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,

  as: PropTypes.elementType,

  className: PropTypes.string
};

const SidebarMenuNavIcon: SidebarMenuNavIcon = React.forwardRef(({
  as: Component = 'span',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-nav-icon');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)} >
    {children || <span className={`${bsPrefix}`} />}
  </Component>
});

SidebarMenuNavIcon.propTypes = propTypes;
SidebarMenuNavIcon.displayName = "SidebarMenuNavIcon";

export default SidebarMenuNavIcon;