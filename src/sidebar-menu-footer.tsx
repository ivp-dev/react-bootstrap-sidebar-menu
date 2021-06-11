import classNames from "classnames";
import React from "react"
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"
import PropTypes from "prop-types";

export type SidebarMenuFooterProps = BsPrefixProps & React.HTMLAttributes<HTMLElement>;

export type SidebarMenuFooter = BsPrefixRefForwardingComponent<'div', SidebarMenuFooterProps>;

const propTypes = {
  /** @default 'sidebar-menu-nav-header' */
  bsPrefix: PropTypes.string,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,

  as: PropTypes.elementType,

  className: PropTypes.string
};

const SidebarMenuFooter: SidebarMenuFooter = React.forwardRef(({
  as: Component = 'div',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-footer');

  return <Component ref={ref} {...props} className={classNames(className, bsPrefix)} >
    {children}
  </Component>
});

SidebarMenuFooter.propTypes = propTypes;
SidebarMenuFooter.displayName = "SidebarMenuFooter";

export default SidebarMenuFooter;