import { useEventCallback } from "@restart/hooks";
import classNames from "classnames";
import React, { useContext } from "react"
import PropTypes from "prop-types";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "react-bootstrap/helpers"
import { useBootstrapPrefix } from "react-bootstrap/ThemeProvider"
import SidebarMenuContext from './sidebar-menu-context'

export type SidebarMenuToggleProps = BsPrefixProps & React.HTMLAttributes<HTMLElement> & {
  label?: string
}

export type SidebarMenuToggle = BsPrefixRefForwardingComponent<'button', SidebarMenuToggleProps>;

const propTypes = {
  /** @default 'sidebar-menu-toggler' */
  bsPrefix: PropTypes.string,
  /** An accessible ARIA label for the toggler button. */
  label: PropTypes.string,
  /** @private */
  onClick: PropTypes.func,
  /**
   * The toggle content. When empty, the default toggle will be rendered.
   */
  children: PropTypes.node,

  as: PropTypes.elementType,

  className: PropTypes.string
};

const defaultProps = {
  label: 'Toggle navigation',
};

const SidebarMenuToggle: SidebarMenuToggle = React.forwardRef(({
  as: Component = 'button',
  children,
  onClick,
  bsPrefix,
  className,
  label,
  ...props
}, ref) => {

  bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-toggle');

  const { onToggle, expanded } = useContext(SidebarMenuContext) || {};

  const handleOnClick = useEventCallback((e) => {
    onClick?.(e);
    onToggle?.();
  });

  if (Component === 'button') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (props as any).type = 'button';
  }

  return <Component ref={ref} {...props} onClick={handleOnClick} className={classNames(className, bsPrefix, !expanded && 'collapsed')} aria-label={label}>
    {children || <span className={`${bsPrefix}-icon`} />}
  </Component>
});

SidebarMenuToggle.displayName = "SidebarMenuToggler";
SidebarMenuToggle.propTypes = propTypes;
SidebarMenuToggle.defaultProps = defaultProps;

export default SidebarMenuToggle;