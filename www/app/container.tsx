import React from "react";
import { SidebarMenu } from '../../src';
import { Tabs, Tab } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

type Props = React.PropsWithChildren<{}>;

const getScrollValue = () => 240;

const MainLayoutComponent: React.FC<Props> = ({ children }) => {
  return (
    <div className="main-wrapper">
      <header className="main-header"></header>
      <SidebarMenu>
        <SidebarMenu.Brand href="/">
        <a className="" title="react-split-view" href="https://github.com/ivp-dev/react-boostrap-sidebar-menu">
            <svg height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill="grey" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
        </SidebarMenu.Brand>
        <SidebarMenu.Toggle>x</SidebarMenu.Toggle>
        <SidebarMenu.Collapse getScrollValue={getScrollValue}>
          <SidebarMenu.Navbar>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Icon><Icon.CodeSlash/></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu">Graphs</SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Icon><Icon.CalendarCheck/></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Link>Calendar</SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Icon><Icon.GraphUp/></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Link>Item 3</SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
            </SidebarMenu.Nav>
          </SidebarMenu.Navbar>
          <SidebarMenu.Navbar>
            <SidebarMenu.Navbar.Toggle><Icon.ChevronRight/></SidebarMenu.Navbar.Toggle>
            <SidebarMenu.Navbar.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>Item 4.1</SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Link>Item 4.2</SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Navbar.Collapse>
          </SidebarMenu.Navbar>
          <SidebarMenu.Navbar>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>Item 5</SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Link>Item 6</SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Link>Item 7</SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Navbar>
        </SidebarMenu.Collapse>
      </SidebarMenu>
      <main className="main-container">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            1
          </Tab>
          <Tab eventKey="profile" title="Profile">
            2
          </Tab>
        </Tabs>
      </main>
      <footer className="main-footer"></footer>
    </div>
  )
};

export default MainLayoutComponent;