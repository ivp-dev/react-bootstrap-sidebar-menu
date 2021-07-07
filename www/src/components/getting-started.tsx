import Code from '../components/code-example';

const GettingStarted = () => {

  return <>
    <h2>React Bootstrap Sidebar Menu</h2>

    <p>Customizable and responsive react sidebar menu based on <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>. Includes support for branding, navigation, and more.</p>

    <h3 id="setup">Install</h3>

    <pre>
      <Code>
        npm install react-bootstrap-sidebar-menu
      </Code>
    </pre>

    <br />

    <h3 id="usage">Usage
      <a href="#usage" className="anchorjs-link">#</a>
    </h3>

    <pre>
      <code>
        <span>import SidebarMenu from 'react-bootstrap-sidebar-menu';</span>
      </code>
    </pre>

    <br />

    <h3>Overview</h3>

    <br />

    <h2 id="api">API</h2>

    <br />

    <h3>SidebarMenu</h3>

    <code>import SidebarMenu from "react-bootstrap-sidebar-menu"</code>

    <br />

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bg</td>
          <td>string</td>
          <td></td>
          <td>A convenience prop for adding <code>bg-*</code> utility classes since they are so commonly used here. <code>light</code> and <code>dark</code> are common choices but any <code>bg-*</code> class is supported, including any custom ones you might define.</td>
        </tr>
        <tr>
          <td>expand</td>
          <td><code>boolean</code> | <code>'sm'</code> | <code>'md'</code> | <code>'lg'</code> | <code>'xl'</code> | <code>'xxl'</code></td>
          <td><code>true</code></td>
          <td>The breakpoint, below which, the SidebarMenu will collapse. When <code>true</code> the SidebarMenu will always be expanded regardless of screen size.</td>
        </tr>
        <tr>
          <td>expanded</td>
          <td>boolean</td>
          <td></td>
          <td>
            <small>
              <em className="text-info">
                <span>
                  controlled by: <code>onToggle</code>, initial prop: <code>defaultExpanded</code>
                </span>
              </em>
            </small>
            <br />
            Controls the visiblity of the SidebarMenu.
          </td>
        </tr>
        <tr>
          <td>hide</td>
          <td><code>boolean</code> | <code>'sm'</code> | <code>'md'</code> | <code>'lg'</code> | <code>'xl'</code></td>
          <td><code>false</code></td>
          <td>The breakpoint, below which, the SidebarMenu will hide. When <code>true</code> the SidebarMenu will always be hidden regardless of screen size.</td>
        </tr>
        <tr>
          <td>activeKey</td>
          <td>string | number</td>
          <td></td>
          <td>Marks the SidbarMenu.Nav.Link with a matching <code>eventKey</code> (or <code>href</code> if present) as active.</td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td>function</td>
          <td></td>
          <td>A callback fired when a descendant of a child <code>&lt;SidebarMenu&gt;</code> is selected.</td>
        </tr>
        <tr>
          <td>onToggle</td>
          <td>function</td>
          <td></td>
          <td>
            <small>
              <em className="text-info">
                <span>
                  controls: <code>expanded</code>
                </span>
              </em>
            </small>
            <br />
            A callback fired when the <code>&lt;SidebarMenu&gt;</code> body collapses or expands.
          </td>
        </tr>
        <tr>
          <td>rtl</td>
          <td>boolean</td>
          <td></td>
          <td>RTL direction.</td>
        </tr>
        <tr>
          <td>role</td>
          <td>string</td>
          <td><code>'navigation'</code></td>
          <td>The ARIA role for the Sidebar, will default to 'navigation' for SidebarMenu whose <code>as</code> is something other than <code>&lt;nav&gt;</code>.</td>
        </tr>
        <tr>
          <td>variant</td>
          <td><code>'light' | 'dark'</code></td>
          <td><code>'light'</code></td>
          <td>The general visual variant a the Sidebar. Use in combination with the <code>bg</code> prop, <code>background-color</code> utilities, or your own background styles.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <h3>Supported content</h3>

    <p>SidebarMenu comes with built-in support for a handful of sub-components. Choose from the following as needed:</p>

    <br />

    <h3>SidebarMenu.Nav</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-nav'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Navbar</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>onToggle</td>
          <td>function</td>
          <td></td>
          <td>
            <small>
              <em className="text-info">
                <span>
                  controls: <code>expanded</code>
                </span>
              </em>
            </small>
            <br />
            A callback fired when the <code>&lt;SidebarMenu.Navbar&gt;</code> body collapses or expands.
          </td>
        </tr>
        <tr>
          <td>expanded</td>
          <td>boolean</td>
          <td></td>
          <td>
            <small>
              <em className="text-info">
                <span>
                  controlled by: <code>onToggle</code>, initial prop: <code>defaultExpanded</code>
                </span>
              </em>
            </small>
            <br />
            Controls the visiblity of the SidebarMenu.Navbar.
          </td>
        </tr>
        <tr>
          <td>role</td>
          <td>string</td>
          <td><code>'navigation'</code></td>
          <td>The ARIA role for the SidebarMenu.Navbar, will default to 'navigation' for SidebarMenu whose <code>as</code> is something other than <code>&lt;nav&gt;</code>.</td>

        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-navbar'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Brand</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>href</td>
          <td>string</td>
          <td></td>
          <td>An href, when provided the SidebarMenu.Brand will render as an <code>&lt;a&gt;</code> element (unless as is provided).</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Toggle</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>children</td>
          <td>node</td>
          <td></td>
          <td>The toggle content. When empty, the default toggle will be rendered.</td>
        </tr>
        <tr>
          <td>label</td>
          <td>string</td>
          <td><code>'Toggle navigation'</code></td>
          <td>An accessible ARIA label for the toggler button.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td>'navbar-toggler'</td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Collapse</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>getScrollValue</td>
          <td>function | string | number</td>
          <td></td>
          <td>Set width of the SidebarMenu when expanded.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-navbar-collapse'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Text</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-text'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Header</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-header'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Body</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-body'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <h3>SidebarMenu.Footer</h3>

    <table className="table table-bordered table-responsive api">
      <thead>
        <tr>
          <th className="name">Name</th>
          <th className="type">Type</th>
          <th className="default">Default</th>
          <th className="description">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>as</td>
          <td>elementType</td>
          <td></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><code>'sidebar-menu-footer'</code></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

  </>
}

export default GettingStarted;