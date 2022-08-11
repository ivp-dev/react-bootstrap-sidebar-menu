# react-bootstrap-sidebar-menu

[![npm][version]][npm-url]
[![License][license]][npm-url]
[![Peer][peer]][npm-url]
[![Download][download]][npm-url]

[version]: https://img.shields.io/npm/v/react-bootstrap-sidebar-menu.svg?style=flat-square
[license]: https://img.shields.io/github/license/ivp-dev/react-bootstrap-sidebar-menu?style=flat-square
[peer]: https://img.shields.io/npm/dependency-version/react-bootstrap-sidebar-menu/peer/react?style=flat-square
[download]: https://img.shields.io/npm/dt/react-bootstrap-sidebar-menu?style=flat-square
[stars]: https://img.shields.io/github/stars/ivp-dev/react-bootstrap-sidebar-menu?style=social
[npm-url]: https://www.npmjs.com/package/react-bootstrap-sidebar-menu
[github-url]: https://github.com/ivp-dev/react-bootstrap-sidebar-menu

Example page: open [Demo](https://ivp-dev.github.io/react-bootstrap-sidebar-menu) to view it in the browser.


Description
------------------------------------------------------------------------------

React sidebar menu based on react-bootstrap


Installation
------------------------------------------------------------------------------

```
npm install react-bootstrap-sidebar-menu
```

Usage
------------------------------------------------------------------------------

```jsx
import SidebarMenu from 'react-bootstrap-sidebar-menu';

<SidebarMenu>
  <SidebarMenu.Header>
    <SidebarMenu.Brand>
      {/* Your brand icon */}
    </SidebarMenu.Brand>
    <SidebarMenu.Toggle />
  </SidebarMenu.Header>
  <SidebarMenu.Body>
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          {/* Menu item icon */}
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {/* Menu item title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    <SidebarMenu.Nav/>
    <SidebarMenu.Sub>
      <SidebarMenu.Sub.Toggle>
        <SidebarMenu.Nav.Icon />
        <SidebarMenu.Nav.Title>
          {/* Submenu title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Sub.Toggle>
      <SidebarMenu.Sub.Collapse>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              {/* Submenu item icon */}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              {/* Submenu item title */}
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Sub.Collapse>
    </SidebarMenu.Sub>
  <SidebarMenu.Body/>
</SidebarMenu>
```

You can import the sidebar-menu.scss directly into your scss file

```
@import 'react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'
```

Compatibility
------------------------------------------------------------------------------

* React v16.14.0 or above,
* React-Dom: v16.14.0 or above


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
