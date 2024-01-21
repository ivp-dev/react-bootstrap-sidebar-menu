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

<Sidebar>
  <Sidebar.Collapse>
    <Sidebar.Header>
      <Sidebar.Brand>{/* brand icon */}</Sidebar.Brand>
      <Sidebar.Toggle />
    </Sidebar.Header>
    <Sidebar.Body>
      <Sidebar.Nav>
        <Sidebar.Nav.Link>
          <Sidebar.Nav.Icon>{/* menu item icon */}</Sidebar.Nav.Icon>
          <Sidebar.Nav.Title>{/* menu item title */}</Sidebar.Nav.Title>
        </Sidebar.Nav.Link>
        <Sidebar.Sub>
          <Sidebar.Sub.Toggle>
            <Sidebar.Nav.Icon />
            <Sidebar.Nav.Title>{/* sub menu item title */}</Sidebar.Nav.Title>
          </Sidebar.Sub.Toggle>
          <Sidebar.Sub.Collapse>
            <Sidebar.Nav>
              <Sidebar.Nav.Link>
                <Sidebar.Nav.Icon>{/* sum menu item icon */}</Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>{/* sub menu item title */}</Sidebar.Nav.Title>
              </Sidebar.Nav.Link>
            </Sidebar.Nav>
          </Sidebar.Sub.Collapse>
        </Sidebar.Sub>
      </Sidebar.Nav>
    </Sidebar.Body>
  </Sidebar.Collapse>
</Sidebar>
```

You can import the sidebar-menu.scss directly into your scss file (please note that you should import bootstrap styles before importing the library's stylesheet)

```
@import '~react-bootstrap-sidebar-menu/dist/sidebar-menu.scss'
```



Compatibility
------------------------------------------------------------------------------

* React v16.14.0 or above,
* React-Dom: v16.14.0 or above


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

### Support Maintanance
------------------------------------------------------------------------------
If you find this package useful consider a small contribution:
[Buy Me A Coffee](https://www.buymeacoffee.com/ivp.dev)
