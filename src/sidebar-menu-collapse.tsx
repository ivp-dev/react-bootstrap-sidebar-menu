import React, { HTMLAttributes, useMemo } from 'react';
import { Collapse, CollapseProps } from "react-bootstrap";
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { SidebarMenuContext } from './sidebar-menu-context';
import createChainedFunction from 'react-bootstrap/createChainedFunction'
import PropTypes from "prop-types";

type SidebarMenuCollapseProps = Omit<CollapseProps, "children"> & HTMLAttributes<HTMLDivElement> & BsPrefixProps & {
  getScrollValue?: (el: HTMLElement) => number
}

const propTypes = {
  /** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
};

const SidebarMenuCollapse =
  React.forwardRef(({ dimension = "width", children, getScrollValue, onEntering, bsPrefix, ...props }: SidebarMenuCollapseProps, ref) => {
    const computedDimension = typeof dimension === 'function' ? dimension() : dimension;

    const handleEntering = useMemo(
      () => createChainedFunction((elem: HTMLElement) => {
        if (typeof getScrollValue === 'function') {
          elem.style[computedDimension] = `${getScrollValue(elem)}px`;
        }
      }, onEntering),
      [computedDimension, getScrollValue, onEntering],
    );

    bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-collapse');

    return (<SidebarMenuContext.Consumer>
      {(context) => (
        <Collapse onEntering={handleEntering} dimension="width" in={!!(context && context.expanded)} ref={ref} {...props}>
          <div ref={ref as any} className={bsPrefix}>
            {children}
          </div>
        </Collapse>
      )}
    </SidebarMenuContext.Consumer>)
  });


SidebarMenuCollapse.displayName = "SidebarMenuCollapse"
SidebarMenuCollapse.propTypes = propTypes;

export default SidebarMenuCollapse;