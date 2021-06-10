import classNames from "classnames";
import React from "react"
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"
import PropTypes from "prop-types";
export type SidebarMenuNavTitleProps = BsPrefixProps & React.HTMLAttributes<HTMLElement>;

export type SidebarMenuNavTitle = BsPrefixRefForwardingComponent<'span', SidebarMenuNavTitleProps>;

const propTypes = {
  /** @default 'sidebar-menu-nav-title' */
  bsPrefix: PropTypes.string,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,

  as: PropTypes.elementType,

  className: PropTypes.string
};

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

SidebarMenuNavTitle.propTypes = propTypes;
SidebarMenuNavTitle.displayName = "SidebarMenuNavTitle";

export default SidebarMenuNavTitle;