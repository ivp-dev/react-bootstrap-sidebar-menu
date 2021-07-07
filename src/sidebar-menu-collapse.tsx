import React, { HTMLAttributes, useContext, useMemo } from 'react';
import { Collapse, CollapseProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuContext from './sidebar-menu-context';
import createChainedFunction from 'react-bootstrap/createChainedFunction'
import PropTypes from "prop-types";
import classNames from 'classnames';

export type SidebarMenuCollapseProps = Omit<CollapseProps, 'children'> & HTMLAttributes<HTMLDivElement> & BsPrefixProps & {
  getScrollValue?: ((el: HTMLElement) => number) | number | string
}

const propTypes = {
  /** @default 'sidebar-menu-collapse' */
  bsPrefix: PropTypes.string,
};

const SidebarMenuCollapse: BsPrefixRefForwardingComponent<'div', SidebarMenuCollapseProps> =
  React.forwardRef<HTMLDivElement, SidebarMenuCollapseProps>(({
    dimension = "width",
    getScrollValue,
    children,
    onEntering,
    className,
    bsPrefix: initialBsPrefix,
    ...props
  }: SidebarMenuCollapseProps, ref) => {
    const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

    const sidebarMenuContext = useContext(SidebarMenuContext)

    const handleEntering = useMemo(
      () => createChainedFunction((elem: HTMLElement) => {
        if (typeof getScrollValue === 'function') {
          elem.style[computedDimension] = `${getScrollValue(elem)}px`;
        }

        if (typeof getScrollValue === 'number') {
          elem.style[computedDimension] = `${getScrollValue}px`;
        }

        if (typeof getScrollValue === 'string') {
          elem.style[computedDimension] = getScrollValue;
        }
      }, onEntering),
      [computedDimension, getScrollValue, onEntering],
    );

    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-collapse');

    return <Collapse {...props} dimension={dimension} onEntering={handleEntering} in={!!sidebarMenuContext?.expanded}>
      <div ref={ref} className={classNames(className, bsPrefix)}>
        {children}
      </div>
    </Collapse>
  });

SidebarMenuCollapse.displayName = "SidebarMenuCollapse";
SidebarMenuCollapse.propTypes = propTypes;

export default SidebarMenuCollapse;