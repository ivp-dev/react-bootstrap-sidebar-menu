import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CheckBox from '../components/check-box'
import Layout from '../components/layout';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import classNames from 'classnames';

const Theme = {
  Light: "light" as const,
  Dark: "dark" as const
}

type AppProps = {};

const App: React.FC<PropsWithChildren<AppProps>> = ({ children }) => {

  const [isRtl, setIsRtl] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [collapseOnSelect, setCollapseOnSelect] = useState(false);

  const themeName = isDarkTheme ? Theme.Dark : Theme.Light;

  return <Layout rtl={isRtl}>
    <Navbar className="main-header" expand="lg" bg={themeName} variant={themeName}>
      <Navbar.Brand title="React-Bootstrap" href="https://github.com/react-bootstrap/react-bootstrap" className="d-block d-lg-none"><span className="react-bootstrap-img" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className={classNames(!isRtl && 'justify-content-end')}>
        <Nav>
          <NavDropdown className={classNames(!isRtl && 'dropdown-left')} title="Settings" id="basic-nav-dropdown">
            <NavDropdown.ItemText>
              <CheckBox id="darkThemeSwitcher" checked={isDarkTheme} onChange={() => setIsDarkTheme(!isDarkTheme)} text={themeName} />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <CheckBox id="rtlSwitcher" checked={isRtl} onChange={() => setIsRtl(!isRtl)} text={isRtl ? "right to left" : "left to right"} />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <CheckBox id="collapseOnSelectSwitcher" checked={collapseOnSelect} onChange={() => setCollapseOnSelect(!collapseOnSelect)} text={"collapse on select"} />
            </NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SidebarMenu toggleStayExpanded={false} rtl={isRtl} collapseOnSelect={collapseOnSelect} defaultActiveKey="#setup" bg={themeName} variant={themeName} expand="lg" hide="md">
      <SidebarMenu.Collapse getScrollValue={300}>
        <SidebarMenu.Header>
          <SidebarMenu.Brand title="React-Bootstrap" href="https://github.com/react-bootstrap/react-bootstrap">
            <span className="react-bootstrap-img" />
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link eventKey="#setup">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">1</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>How to install</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#usage">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">2</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Usage</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">3</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">4</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">5</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">6</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">7</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link eventKey="#api_1">
              <SidebarMenu.Nav.Icon className="badge rounded-pill">8</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Navbar eventKey={1}>
              <SidebarMenu.Navbar.Toggle eventKey={1}>x</SidebarMenu.Navbar.Toggle>
              <SidebarMenu.Navbar.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link eventKey="#api_1_1">
                    <SidebarMenu.Nav.Icon className="badge rounded-pill">7</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Link eventKey="#api_1_2">
                    <SidebarMenu.Nav.Icon className="badge rounded-pill">8</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
              </SidebarMenu.Navbar.Collapse>
            </SidebarMenu.Navbar>
            <SidebarMenu.Navbar eventKey={0}>
              <SidebarMenu.Navbar.Toggle eventKey={0}>x</SidebarMenu.Navbar.Toggle>
              <SidebarMenu.Navbar.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link eventKey="#api_2_1">
                    <SidebarMenu.Nav.Icon className="badge rounded-pill">7</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Link eventKey="#api_2_2">
                    <SidebarMenu.Nav.Icon className="badge rounded-pill">8</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
              </SidebarMenu.Navbar.Collapse>
            </SidebarMenu.Navbar>
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