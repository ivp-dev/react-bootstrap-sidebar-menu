import React, { useState } from "react";
import { SidebarMenu } from '../../src';
import { Tabs, Tab, Navbar, Nav } from 'react-bootstrap';

type Props = {

};

const MainLayoutComponent: React.FC<Props> = () => {
  const bg = "dark"
  const variant = "dark";

  return (
    <div className="main-wrapper">
      <Navbar bg={bg} variant={variant}>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <SidebarMenu bg={bg} variant={variant}>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>Bootstrap-Sidebar</SidebarMenu.Brand>
          <SidebarMenu.Toggle>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon">
              <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
            </svg>
          </SidebarMenu.Toggle>
        </SidebarMenu.Header>
        <SidebarMenu.Collapse getScrollValue={() => 200}>
          <SidebarMenu.Navbar>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Code</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/issues">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Issues</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/pulls">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Pulls</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/actions">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Actions</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/projects">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Projects</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/wiki">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Wiki</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/security">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Security</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
              <SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/pulse">
                  <SidebarMenu.Nav.Icon><svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg></SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Insights</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav.Item>
            </SidebarMenu.Nav>
          </SidebarMenu.Navbar>
          <SidebarMenu.Navbar>
            <SidebarMenu.Nav.Item>
              <SidebarMenu.Navbar.Toggle>
                <SidebarMenu.Nav.Icon>
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" height="16" width="16" className="octicon"><path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  Branches
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Navbar.Toggle>
            </SidebarMenu.Nav.Item>
            <SidebarMenu.Navbar.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Item>
                  <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/branches">
                    <SidebarMenu.Nav.Icon>
                      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon">
                        <path fillRule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                      </svg>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Overview</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Item>
                  <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/branches/active">
                    <SidebarMenu.Nav.Icon>
                      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon">
                        <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                      </svg>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Active</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Item>
                  <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/branches/stale">
                    <SidebarMenu.Nav.Icon><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="octicon" width="16" height="16" viewBox="0 0 16 16"><path d="M0 8a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z"></path></svg></SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>Stale</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav.Item>
                <SidebarMenu.Nav.Item>
                  <SidebarMenu.Nav.Link href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/branches/all">
                    <SidebarMenu.Nav.Icon>
                      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="octicon">
                        <path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
                      </svg>
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title>All branches</SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav.Item>
              </SidebarMenu.Nav>
            </SidebarMenu.Navbar.Collapse>
          </SidebarMenu.Navbar>
        </SidebarMenu.Collapse>
        <SidebarMenu.Footer>
        </SidebarMenu.Footer>
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