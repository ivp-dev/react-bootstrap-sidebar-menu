import * as React from 'react';
import { useContext } from 'react';
import { Collapse, CollapseProps } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import classNames from 'classnames';
import SidebarMenuSubContext from './sidebar-menu-sub-context';

export type SidebarMenuSubCollapseProps =
  CollapseProps &
  React.HTMLAttributes<HTMLDivElement> &
  BsPrefixProps;

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
SidebarMenuSubCollapse.propTypes = Collapse.propTypes;

export default SidebarMenuSubCollapse;
