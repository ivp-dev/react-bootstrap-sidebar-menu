import CodeExample from '../components/code-example';
import PreContainer from '../components/pre-container';
import ComponentTitle from './component-title';

const GettingStarted = () => {

  return <>
    <h2>React Bootstrap Sidebar Menu</h2>

    <p>Customizable and responsive react sidebar menu based on <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>. Includes support for branding, navigation, and more.</p>

    <h3 id="setup">Install</h3>

    <PreContainer bg="dark">
      <CodeExample copy="npm install react-bootstrap-sidebar-menu">
        <CodeExample.Variable.Npm>npm</CodeExample.Variable.Npm> install react-bootstrap-sidebar-menu
      </CodeExample>
    </PreContainer>

    <br />

    <h3 id="usage">Usage</h3>

    <PreContainer bg="dark">
      <CodeExample copy="import SidebarMenu from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>SidebarMenu</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

    <br />

    <h3 id="overview">Overview</h3>

    <p>
      <CodeExample>&lt;SidebarMenu&gt;</CodeExample> is an expandable and collapsible component that acts as a side container to place
      primary or secondary content alongside the main content. It provides flexible options to be shown and hidden based on user interactions.
      The component supports some built in elements, such as header, body, footer, toggle button and others, of which you can optionally
      disable and provide your own (if needed).
    </p>

    <br />

    <h3 id="api">API</h3>

    <br />

    <ComponentTitle id="sidebarmenu" title="SidebarMenu" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu.tsx" />

    <PreContainer>
      <CodeExample copy="import SidebarMenu from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>SidebarMenu</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;aside&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bg</td>
          <td>string</td>
          <td><CodeExample>'light'</CodeExample></td>
          <td>
            A convenience prop for adding <CodeExample>bg-*</CodeExample> utility classes since they are so commonly used here.
            <CodeExample>light</CodeExample> and <CodeExample>dark</CodeExample> are common choices but any <CodeExample>bg-*</CodeExample> class is supported,
            including any custom ones you might define.
          </td>
        </tr>
        <tr>
          <td>expand</td>
          <td><CodeExample>boolean</CodeExample> | <CodeExample>'sm'</CodeExample> | <CodeExample>'md'</CodeExample> | <CodeExample>'lg'</CodeExample> | <CodeExample>'xl'</CodeExample> | <CodeExample>'xxl'</CodeExample></td>
          <td><CodeExample>true</CodeExample></td>
          <td>
            The breakpoint, below which, the SidebarMenu will collapse.
            When <CodeExample>true</CodeExample> the SidebarMenu will always be expanded regardless of screen size.
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
                  controlled by: <CodeExample>onToggle</CodeExample>, initial prop: <CodeExample>defaultExpanded</CodeExample>
                </span>
              </em>
            </small>
            <br />
            Controls the visiblity of the SidebarMenu.
          </td>
        </tr>
        <tr>
          <td>defaultExpanded</td>
          <td>boolean</td>
          <td><CodeExample>false</CodeExample></td>
          <td>Default value of the <CodeExample>expanded</CodeExample> property.</td>
        </tr>
        <tr>
          <td>hide</td>
          <td><CodeExample>boolean</CodeExample> | <CodeExample>'sm'</CodeExample> | <CodeExample>'md'</CodeExample> | <CodeExample>'lg'</CodeExample> | <CodeExample>'xl'</CodeExample></td>
          <td><CodeExample>false</CodeExample></td>
          <td>
            The breakpoint, below which, the SidebarMenu will hide.
            When <CodeExample>true</CodeExample> the SidebarMenu will always be hidden regardless of screen size.
          </td>
        </tr>
        <tr>
          <td>activeKey</td>
          <td>string | number</td>
          <td></td>
          <td>Marks the <CodeExample>&lt;SidebarMenu.Nav.Link&gt;</CodeExample> with a matching <CodeExample>eventKey</CodeExample> (or <CodeExample>href</CodeExample> if present) as active.</td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td>function</td>
          <td></td>
          <td>A callback fired when a descendant of a child <CodeExample>&lt;SidebarMenu&gt;</CodeExample> is selected.</td>
        </tr>
        <tr>
          <td>exclusiveExpand</td>
          <td>boolean</td>
          <td><CodeExample>false</CodeExample></td>
          <td>
            Only allow one <CodeExample>&lt;SidebarMenu.Sub&gt;</CodeExample> open at a time.
            When <CodeExample>true</CodeExample> the <CodeExample>&lt;SidebarMenu.Sub&gt;</CodeExample> will functions like an "accordion" where only a single menu is open at a time</td>
        </tr>
        <tr>
          <td>onToggle</td>
          <td>function</td>
          <td></td>
          <td>
            <small>
              <em className="text-info">
                <span>
                  controls: <CodeExample>expanded</CodeExample>
                </span>
              </em>
            </small>
            <br />
            A callback fired when the <CodeExample>&lt;SidebarMenu&gt;</CodeExample> body collapses or expands.
          </td>
        </tr>
        <tr>
          <td>rtl</td>
          <td>boolean</td>
          <td><CodeExample>false</CodeExample></td>
          <td>RTL direction.</td>
        </tr>
        <tr>
          <td>role</td>
          <td>string</td>
          <td><CodeExample>'navigation'</CodeExample></td>
          <td>
            The ARIA role for the Sidebar, will default to 'navigation' for SidebarMenu whose <CodeExample>as</CodeExample>
            is something other than <CodeExample>&lt;nav&gt;</CodeExample>.
          </td>
        </tr>
        <tr>
          <td>collapseOnSelect</td>
          <td>boolean</td>
          <td><CodeExample>false</CodeExample></td>
          <td>
            Toggles <CodeExample>expanded</CodeExample> to <CodeExample>false</CodeExample> after the onSelect event of a descendant of a child <CodeExample>&lt;SidebarMenu&gt;</CodeExample>
            fires. Does nothing if no <CodeExample>&lt;SidebarMenu&gt;</CodeExample> descendants exist.
          </td>
        </tr>
        <tr>
          <td>variant</td>
          <td><CodeExample>'light' | 'dark'</CodeExample></td>
          <td><CodeExample>'light'</CodeExample></td>
          <td>The general visual variant a the Sidebar. Use in combination with the <CodeExample>bg</CodeExample> prop, <CodeExample>background-color</CodeExample> utilities, or your own background styles.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <h3>Supported content</h3>

    <p>SidebarMenu comes with built-in support for a handful of sub-components. Choose from the following as needed:</p>

    <br />

    <ComponentTitle id="sidebarmenu.nav" title="SidebarMenu.Nav" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-nav.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuNav } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuNav &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;div&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-nav'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.nav.link" title="SidebarMenu.Nav.Link" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-nav-link.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuNavLink } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuNavLink &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;a&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-nav-link'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td><CodeExample>false</CodeExample></td>
          <td>The disabled state of the <CodeExample>SidebarMenuNavLink</CodeExample> item.</td>
        </tr>
        <tr>
          <td>eventKey</td>
          <td>string | number</td>
          <td></td>
          <td>Uniquely identifies the <CodeExample>SidebarMenuNavLink</CodeExample> amongst its siblings, used to determine and control the active state of the <CodeExample>SidebarMenu</CodeExample></td>
        </tr>
        <tr>
          <td>onSelect</td>
          <td>function</td>
          <td></td>
          <td>A callback fired when the <CodeExample>SidebarMenuNavLink</CodeExample> is selected.</td>
        </tr>
        <tr>
          <td>href</td>
          <td>string</td>
          <td></td>
          <td>The HTML href attribute for the <CodeExample>SidebarMenuNavLink</CodeExample></td>
        </tr>
        <tr>
          <td>role</td>
          <td>string</td>
          <td></td>
          <td>The ARIA role for the <CodeExample>SidebarMenuNavLink</CodeExample></td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.nav.item" title="SidebarMenu.Nav.Item" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-nav-item.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuNavItem } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuNavItem &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-nav-item'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.nav.icon" title="SidebarMenu.Nav.Icon" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-nav-icon.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuNavIcon } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuNavIcon &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-sidebar-menu'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.nav.title" title="SidebarMenu.Nav.Title" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-nav-title.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuNavTitle } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuNavTitle &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-nav-title'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.sub" title="SidebarMenu.Sub" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-sub.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuSub } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuSub &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;div&gt;</CodeExample></td>
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
                  controls: <CodeExample>expanded</CodeExample>
                </span>
              </em>
            </small>
            <br />
            A callback fired when the <CodeExample>&lt;SidebarMenu.Sub&gt;</CodeExample> body collapses or expands.
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
                  controlled by: <CodeExample>onToggle</CodeExample>, initial prop: <CodeExample>defaultExpanded</CodeExample>
                </span>
              </em>
            </small>
            <br />
            Controls the visiblity of the SidebarMenu.Sub.
          </td>
        </tr>
        <tr>
          <td>role</td>
          <td>string</td>
          <td><CodeExample>'navigation'</CodeExample></td>
          <td>The ARIA role for the SidebarMenu.Sub, will default to 'navigation' for SidebarMenu whose <CodeExample>as</CodeExample> is something other than <CodeExample>&lt;nav&gt;</CodeExample>.</td>

        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-sub'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.sub.collapse" title="SidebarMenu.Sub.Collapse" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-sub-collapse.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuSubCollapse } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuSubCollapse &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-sub-collapse'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.sub.toggle" title="SidebarMenu.Sub.Toggle" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-sub-toggle.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuSubToggle } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuSubToggle &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;button&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-sub-toggle'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.brand" title="SidebarMenu.Brand" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-brand.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuBrand } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuBrand &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;a&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>href</td>
          <td>string</td>
          <td></td>
          <td>An href, when provided the SidebarMenu.Brand will render as an <CodeExample>&lt;a&gt;</CodeExample> element (unless as is provided).</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-brand'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.toggle" title="SidebarMenu.Toggle" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-toggle.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuToggle } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuToggle &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;button&gt;</CodeExample></td>
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
          <td><CodeExample>'Toggle navigation'</CodeExample></td>
          <td>An accessible ARIA label for the toggler button.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-toggle'</CodeExample></td>
          <td>Change the undrlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.collapse" title="SidebarMenu.Collapse" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-collapse.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuCollapse } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuCollapse &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-navbar-collapse'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
        <tr>
          <td>getScrollValue</td>
          <td>function | string | number</td>
          <td><CodeExample>300px</CodeExample></td>
          <td>Set width of the SidebarMenu when expanded.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.text" title="SidebarMenu.Text" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-text.tsx" />


    <PreContainer>
      <CodeExample copy="import { SidebarMenuText } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuText &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;span&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-text'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.header" title="SidebarMenu.Header" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-header.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuHeader } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuHeader &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;div&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-header'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.body" title="SidebarMenu.Body" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-body.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuBody } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuBody &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;div&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-body'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

    <ComponentTitle id="sidebarmenu.footer" title="SidebarMenu.Footer" href="https://github.com/ivp-dev/react-bootstrap-sidebar-menu/blob/main/src/sidebar-menu-footer.tsx" />

    <PreContainer>
      <CodeExample copy="import { SidebarMenuFooter } from 'react-bootstrap-sidebar-menu';">
        <CodeExample.Directive>import</CodeExample.Directive> <CodeExample.Variable>&#123; SidebarMenuFooter &#125;</CodeExample.Variable> <CodeExample.Directive>from</CodeExample.Directive> 'react-bootstrap-sidebar-menu';
      </CodeExample>
    </PreContainer>

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
          <td><CodeExample>&lt;div&gt;</CodeExample></td>
          <td>Set a custom element for this component.</td>
        </tr>
        <tr>
          <td>bsPrefix</td>
          <td>string</td>
          <td><CodeExample>'sidebar-menu-footer'</CodeExample></td>
          <td>Change the underlying component CSS base class name and modifier class names prefix.</td>
        </tr>
      </tbody>
    </table>

    <br />

  </>
}

export default GettingStarted;