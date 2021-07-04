import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Layout } from '../../components'
import { SidebarMenu } from 'react-bootstrap-sidebar-menu';

const Theme = {
  Light: "light" as const,
  Dark: "dark" as const 
}

type AppProps = {};

const App: React.FC<PropsWithChildren<AppProps>> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.Dark);

  return <Layout>
    <Navbar className="main-header" bg={theme} variant={theme}>
      <Navbar.Brand className="d-block d-lg-none"><span className="react-bootstrap-img" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/examples">Examples</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SidebarMenu defaultActiveKey="#setup" bg={theme} variant={theme} expand="md" hide="md">
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