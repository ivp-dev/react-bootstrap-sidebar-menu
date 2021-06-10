import { useEventCallback } from "@restart/hooks";
import classNames from "classnames";
import React, { useContext } from "react"
import PropTypes from "prop-types";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers"
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider"
import { SidebarMenuContext } from './sidebar-menu-context'

export type SidebarMenuToggleProps = BsPrefixProps & React.HTMLAttributes<HTMLElement>

export type SidebarMenuToggle = BsPrefixRefForwardingComponent<'button', SidebarMenuToggleProps>;

const propTypes = {
  /** @default 'sidebar-menu-toggle' */
  bsPrefix: PropTypes.string,

  /** @private */
  onClick: PropTypes.func,

  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,

  as: PropTypes.elementType,

  className: PropTypes.string
};

const SidebarMenuToggle: SidebarMenuToggle = React.forwardRef(({
  as: Component = 'button',
  children,
  bsPrefix,
  className,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-toggler');

  const { onToggle, expanded } = useContext(SidebarMenuContext) || {};

  const handleOnClick = useEventCallback((e) => {
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props as any).type = 'button';
  }

  return <Component onClick={handleOnClick} ref={ref} className={classNames(className, bsPrefix, !expanded && 'collapsed')} {...props}>
    {children || <span className={`${bsPrefix}`} />}
  </Component>
});

SidebarMenuToggle.propTypes = propTypes;
SidebarMenuToggle.displayName = "SidebarMenuToggle";

export default SidebarMenuToggle;