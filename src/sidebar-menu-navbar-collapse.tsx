import * as React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import Collapse, { CollapseProps } from 'react-bootstrap/Collapse';
import { useBootstrapPrefix } from 'react-bootstrap/ThemeProvider';
import NavbarContext from 'react-bootstrap/NavbarContext';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface SidebarMenuNavbarCollapseProps
  extends Omit<CollapseProps, 'children'>,
    React.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {}

const propTypes = {
  /** @default 'sidebar-menu-navbar-collapse' */
  bsPrefix: PropTypes.string,
};

const SidebarMenuNavbarCollapse = React.forwardRef<HTMLDivElement, SidebarMenuNavbarCollapseProps>(
  ({ children, bsPrefix, ...props }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'sidebar-menu-navbar-collapse');
    
    const context = useContext(NavbarContext);

    return (
      <Collapse in={!!(context && context.expanded)} {...props}>
        <div ref={ref} className={bsPrefix}>
          {children}
        </div>
      </Collapse>
    );
  },
);

SidebarMenuNavbarCollapse.displayName = 'SidebarMenuNavbarCollapse';
SidebarMenuNavbarCollapse.propTypes = propTypes;

export default SidebarMenuNavbarCollapse;
