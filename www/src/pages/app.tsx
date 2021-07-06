import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CheckBox from '../components/check-box'
import Layout from '../components/layout';
import { SidebarMenu } from 'react-bootstrap-sidebar-menu';
import classNames from 'classnames';

const Theme = {
  Light: "light" as const,
  Dark: "dark" as const
}

type AppProps = {};

const App: React.FC<PropsWithChildren<AppProps>> = ({ children }) => {

  const [isRtl, setIsRtl] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const themeName = isDarkTheme ? Theme.Dark : Theme.Light;

  return <Layout rtl={isRtl}>
    <Navbar className="main-header" expand="lg" bg={themeName} variant={themeName}>
      <Navbar.Brand className="d-block d-lg-none"><span className="react-bootstrap-img" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className={classNames(!isRtl && 'justify-content-end')}>
        <Nav>
          <NavDropdown className={classNames(!isRtl && 'dropdown-left')} title="Settings" id="basic-nav-dropdown">
            <NavDropdown.ItemText>
              <CheckBox id="darkThemeSwitcher" checked={isDarkTheme} onChange={() => setIsDarkTheme(!isDarkTheme)} text={themeName} />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <CheckBox id="rtlSwitcher" checked={isRtl} onChange={() => setIsRtl(!isRtl)} text={isRtl ? "rtl" : "ltr"} />
            </NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SidebarMenu rtl={isRtl} defaultActiveKey="#setup" bg={themeName} variant={themeName} expand="lg" hide="md">
      <SidebarMenu.Collapse getScrollValue={() => 300}>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>
            <span className="react-bootstrap-img" />
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link href="#setup">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">1</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>How to install</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link href="#usage">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">2</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Usage</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link href="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">3</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link href="#api_1">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">3.1</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
          <SidebarMenu.Navbar>
            <SidebarMenu.Navbar.Toggle>)</SidebarMenu.Navbar.Toggle>
            <SidebarMenu.Navbar.Collapse>
              <SidebarMenu.Nav.Link href="#test">
                <SidebarMenu.Nav.Icon>4</SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title></SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Navbar.Collapse>
          </SidebarMenu.Navbar>
        </SidebarMenu.Body>
        <SidebarMenu.Footer>
        </SidebarMenu.Footer>
      </SidebarMenu.Collapse>
    </SidebarMenu>
    <main className="main-container container-fluid">
      {children}
    </main>
  </Layout>
}

export default App;