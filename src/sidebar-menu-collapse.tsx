import React, { HTMLAttributes, useMemo } from 'react';
import { Collapse, CollapseProps } from "react-bootstrap";
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { SidebarMenuContext } from './sidebar-menu-context';
import createChainedFunction from 'react-bootstrap/createChainedFunction'
import PropTypes from "prop-types";

type SidebarMenuCollapseProps = Omit<CollapseProps, 'children'> & HTMLAttributes<HTMLDivElement> & BsPrefixProps & {
  getScrollValue?: ((el: HTMLElement) => number) | number | string
}

const propTypes = {
  /** @default 'sidebar-menu-collapse' */
  bsPrefix: PropTypes.string,
};

const SidebarMenuCollapse =
  React.forwardRef<HTMLDivElement, SidebarMenuCollapseProps>(({
    dimension = "width",
    children,
    getScrollValue,
    onEntering,
    bsPrefix: initialBsPrefix,
    ...props
  }: SidebarMenuCollapseProps, ref) => {
    const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

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

    return (<SidebarMenuContext.Consumer>
      {(context) => {
        return <Collapse dimension={dimension} onEntering={handleEntering} in={!!context?.expanded} {...props}>
        <div ref={ref} className={bsPrefix}>
          {children}
        </div>
      </Collapse>
      }}
    </SidebarMenuContext.Consumer>)
  });


SidebarMenuCollapse.displayName = "SidebarMenuCollapse";
SidebarMenuCollapse.propTypes = propTypes;

export default SidebarMenuCollapse;