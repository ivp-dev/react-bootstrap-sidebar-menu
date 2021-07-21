import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { Collapse, CollapseProps } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import classNames from 'classnames';
import SidebarMenuSubContext from './sidebar-menu-sub-context';

export type SidebarMenuSubCollapseProps =
  Omit<CollapseProps, 'children'> &
  React.HTMLAttributes<HTMLDivElement> &
  BsPrefixProps;

const propTypes = {
  /** @default 'sidebar-menu-sub-collapse' */
  bsPrefix: PropTypes.string
};

const SidebarMenuSubCollapse: BsPrefixRefForwardingComponent<'div', SidebarMenuSubCollapseProps> =
  React.forwardRef<HTMLDivElement, SidebarMenuSubCollapseProps>(({
    children,
    bsPrefix: initialBsPrefix,
    className,
    ...props
  }: SidebarMenuSubCollapseProps, ref) => {
    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-sub-collapse');
    const subContext = useContext(SidebarMenuSubContext);
    return (
      <Collapse in={!!(subContext && subContext.expanded)} {...props}>
        <div ref={ref} className={classNames(bsPrefix, className)}>
          {children}
        </div>
      </Collapse>
    )
  });

SidebarMenuSubCollapse.displayName = 'SidebarMenuSubCollapse';
SidebarMenuSubCollapse.propTypes = propTypes;

export default SidebarMenuSubCollapse;
