import React, { HTMLAttributes, useContext, useMemo } from 'react';
import { Collapse, CollapseProps } from "react-bootstrap";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuContext from './sidebar-menu-context';
import createChainedFunction from 'react-bootstrap/createChainedFunction'
import classNames from 'classnames';

export interface SidebarMenuCollapseProps extends Omit<CollapseProps, 'children'>, HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  getScrollValue?: ((el: HTMLElement) => string | number) | number | string
}

const SidebarMenuCollapse: BsPrefixRefForwardingComponent<'div', SidebarMenuCollapseProps> =
  React.forwardRef<HTMLDivElement, SidebarMenuCollapseProps>(({
    dimension = 'width',
    getScrollValue = () => 300,
    children,
    onEntering,
    className,
    bsPrefix: initialBsPrefix,
    ...props
  }: SidebarMenuCollapseProps, ref) => {

    const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
    const sidebarMenuContext = useContext(SidebarMenuContext);
    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-collapse');

    const handleEntering = useMemo(() => createChainedFunction((elem: HTMLElement) => {
      if (typeof getScrollValue === 'function') {
        const scrollValue = getScrollValue(elem);
        elem.style[computedDimension] = typeof scrollValue === 'string' ? scrollValue : `${scrollValue}px`;
      } else if (typeof getScrollValue === 'number') {
        elem.style[computedDimension] = `${getScrollValue}px`;
      } else if (typeof getScrollValue === 'string') {
        elem.style[computedDimension] = getScrollValue;
      }
    }, onEntering),
      [computedDimension, getScrollValue, onEntering],
    );

    return <Collapse {...props} dimension={dimension} onEntering={handleEntering} in={!!sidebarMenuContext?.expanded}>
      <div ref={ref} className={classNames(className, bsPrefix)}>
        {children}
        <span></span>
      </div>
    </Collapse>
  });

SidebarMenuCollapse.displayName = "SidebarMenuCollapse";
SidebarMenuCollapse.propTypes = Collapse.propTypes;

export default SidebarMenuCollapse;