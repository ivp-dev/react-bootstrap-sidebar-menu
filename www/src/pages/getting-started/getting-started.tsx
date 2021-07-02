import React from 'react';
import { SidebarMenu } from 'react-bootstrap-sidebar-menu'
import { useContext, useState } from 'react';
import { GlobalThemeContext } from '../../contexts'
import { Expand } from '../../types';
import { MainMenu } from '../../components/main-menu';

const GettingStarted = () => {
  const context = useContext(GlobalThemeContext);

  return <React.Fragment>
    <MainMenu/>
    
    <SidebarMenu bg={context?.bg} variant={context?.bg} expand={context?.expand} hide="md">
        <SidebarMenu.Collapse getScrollValue={() => 300}>
          <SidebarMenu.Header>
            <SidebarMenu.Brand>
              <span className="react-bootstrap-img" />
            </SidebarMenu.Brand>
            <SidebarMenu.Toggle />
          </SidebarMenu.Header>
          <SidebarMenu.Body>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="#code">
                <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>Code</SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Body>
          <SidebarMenu.Footer>
          </SidebarMenu.Footer>
        </SidebarMenu.Collapse>
      </SidebarMenu>
  </React.Fragment>
}

export default GettingStarted;