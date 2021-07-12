import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { Collapse, CollapseProps } from 'react-bootstrap';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import SidebarMenuNavbarContext from './sidebar-menu-navbar-context'
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import classNames from 'classnames';
import SidebarMenuContext from './sidebar-menu-context';
import { EventKey } from 'react-bootstrap/types';

export type SidebarMenuNavbarCollapseProps =
  Omit<CollapseProps, 'children'> &
  React.HTMLAttributes<HTMLDivElement> &
  BsPrefixProps & {
    //eventKey?: EventKey
  }

const propTypes = {
  /** @default 'sidebar-menu-navbar-collapse' */
  bsPrefix: PropTypes.string
};

const SidebarMenuNavbarCollapse: BsPrefixRefForwardingComponent<'div', SidebarMenuNavbarCollapseProps> =
  React.forwardRef<HTMLDivElement, SidebarMenuNavbarCollapseProps>(({
    children,
    bsPrefix: initialBsPrefix,
    className,
    ...props
  }: SidebarMenuNavbarCollapseProps, ref) => {
    const bsPrefix = useBootstrapPrefix(initialBsPrefix, 'sidebar-menu-navbar-collapse');
    const navbarContext = useContext(SidebarMenuNavbarContext);

    return (
      <Collapse in={!!(navbarContext && navbarContext.expanded)} {...props}>
        <div ref={ref} className={classNames(bsPrefix, className)}>
          {children}
        </div>
      </Collapse>
    );
  },
  );

SidebarMenuNavbarCollapse.displayName = 'SidebarMenuNavbarCollapse';
SidebarMenuNavbarCollapse.propTypes = propTypes;

export default SidebarMenuNavbarCollapse;
