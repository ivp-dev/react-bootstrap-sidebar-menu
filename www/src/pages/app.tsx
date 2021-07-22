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
  const [exclusiveExpand, setExclusiveExpand] = useState(false);

  const themeName = isDarkTheme ? Theme.Dark : Theme.Light;

  const onSelect = (eventKey: string | null) => {
    if (eventKey)
      document.getElementById(eventKey)?.scrollIntoView({ behavior: 'smooth' })
  }

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
              <CheckBox id="collapseOnSelectSwitcher" checked={collapseOnSelect} onChange={() => setCollapseOnSelect(!collapseOnSelect)} text="collapse on select" />
            </NavDropdown.ItemText>
            <NavDropdown.ItemText>
              <CheckBox id="exclusiveExpandSwitcher" checked={exclusiveExpand} onChange={() => setExclusiveExpand(!exclusiveExpand)} text="exclusive expand" />
            </NavDropdown.ItemText>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <SidebarMenu
      exclusiveExpand={exclusiveExpand}
      collapseOnSelect={collapseOnSelect}
      variant={themeName}
      bg={themeName}
      rtl={isRtl}
      expand="lg"
      hide="md"
    >
      <SidebarMenu.Collapse>
        <SidebarMenu.Header>
          <SidebarMenu.Brand title="React-Bootstrap" href="https://github.com/react-bootstrap/react-bootstrap">
            <span className="react-bootstrap-img" />
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="setup">
              <SidebarMenu.Nav.Icon>1</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>How to install</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="usage">
              <SidebarMenu.Nav.Icon>2</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Usage</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="overview">
              <SidebarMenu.Nav.Icon>3</SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Overview</SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
            <SidebarMenu.Sub eventKey={0}>
              <SidebarMenu.Sub.Toggle>
                <SidebarMenu.Nav.Icon />
                <SidebarMenu.Nav.Title>Api</SidebarMenu.Nav.Title>
              </SidebarMenu.Sub.Toggle>
              <SidebarMenu.Sub.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu">
                    <SidebarMenu.Nav.Icon>4</SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>SidebarMenu</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                  <SidebarMenu.Sub eventKey={1}>
                    <SidebarMenu.Sub.Toggle>
                      <SidebarMenu.Nav.Icon />
                      <SidebarMenu.Nav.Title>Built-in elements</SidebarMenu.Nav.Title>
                    </SidebarMenu.Sub.Toggle>
                    <SidebarMenu.Sub.Collapse>
                      <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.nav">
                          <SidebarMenu.Nav.Icon>4.1</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Nav</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>

                        <SidebarMenu.Sub eventKey={2}>
                          <SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Nav.Icon />
                            <SidebarMenu.Nav.Title>Built-in elements</SidebarMenu.Nav.Title>
                          </SidebarMenu.Sub.Toggle>
                          <SidebarMenu.Sub.Collapse>
                            <SidebarMenu.Nav>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.nav.link">
                                <SidebarMenu.Nav.Icon>4.1.1</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Nav.Link</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.nav.item">
                                <SidebarMenu.Nav.Icon>4.1.2</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Nav.Item</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.nav.icon">
                                <SidebarMenu.Nav.Icon>4.1.3</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Nav.Icon</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.nav.title">
                                <SidebarMenu.Nav.Icon>4.1.4</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Nav.Title</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                          </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>

                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.sub">
                          <SidebarMenu.Nav.Icon>4.2</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Sub</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>

                        <SidebarMenu.Sub eventKey={3}>
                          <SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Nav.Icon />
                            <SidebarMenu.Nav.Title>Built-in elements</SidebarMenu.Nav.Title>
                          </SidebarMenu.Sub.Toggle>
                          <SidebarMenu.Sub.Collapse>
                            <SidebarMenu.Nav>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.sub.collapse">
                                <SidebarMenu.Nav.Icon>4.2.1</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Sub.Collapse</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                              <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.sub.toggle">
                                <SidebarMenu.Nav.Icon>4.2.2</SidebarMenu.Nav.Icon>
                                <SidebarMenu.Nav.Title>SidebarMenu.Sub.Toggle</SidebarMenu.Nav.Title>
                              </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                          </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>

                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.brand">
                          <SidebarMenu.Nav.Icon>4.3</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Brand</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.toggle">
                          <SidebarMenu.Nav.Icon>4.4</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Toggle</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.collapse">
                          <SidebarMenu.Nav.Icon>4.5</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Collapse</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.text">
                          <SidebarMenu.Nav.Icon>4.6</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Text</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.header">
                          <SidebarMenu.Nav.Icon>4.7</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Header</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.body">
                          <SidebarMenu.Nav.Icon>4.8</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Body</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav.Link onSelect={onSelect} eventKey="sidebarmenu.footer">
                          <SidebarMenu.Nav.Icon>4.9</SidebarMenu.Nav.Icon>
                          <SidebarMenu.Nav.Title>SidebarMenu.Footer</SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                      </SidebarMenu.Nav>
                    </SidebarMenu.Sub.Collapse>
                  </SidebarMenu.Sub>
                </SidebarMenu.Nav>
              </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>
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