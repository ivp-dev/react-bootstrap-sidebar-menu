const GettingStarted = () => {

  return <div>
    <h2>React Bootstrap Sidebar Menu</h2>

    <p>Customizable and responsive react sidebar menu based on <a href="https://react-bootstrap.github.io/">React-Bootstrap</a>. Includes support for branding, navigation, and more.</p>

    <section>

      <h3 id="setup">Install</h3>

      <pre>
        <code>
          npm install react-bootstrap-sidebar-menu
        </code>
      </pre>
    </section>

    <section>

      <h3 id="usage">Usage
        <a href="#usage" className="anchorjs-link">#</a>
      </h3>

      <pre>
        <code>
          <span>import &#123; SidebarMenu &#125; from 'react-bootstrap-sidebar-menu';</span>
        </code>
      </pre>

    </section>

    <section>

      <h3>Overview</h3>

      <p>Before getting started with SidebarMenu you need to know that: </p>

      <ul>
        <li>Use the <code>expand</code> prop to allow for collapsing the Sidebar at lower breakpoints.</li>
      </ul>

      <aside role="note">It is very similar to using Navbar.</aside>
    </section>

    <section>

      <h3>Responsive behaviors</h3>

      <p>Use the expand prop as well as the SidebarMenu.Toggle and SidebarMenu.Collapse components to control when content collapses behind a button.</p>

      <p>Set the defaultExpanded prop to make the SidebarMenu start expanded. Set collapseOnSelect to make the SidebarMenu collapse automatically when the user selects an item. You can also finely control the collapsing behavior by using the expanded and onToggle props.</p>

      <aside role="note">Watch out! You need to provide a breakpoint value to expand in order for the SidebarMenu to collapse at all.</aside>
    </section>

    <section>

      <h3>Color schemes</h3>

      <p>
        Choose from <code>variant="light"</code> for use with light background colors, or <code>variant="dark"</code> for dark background colors.
        Then, customize with the <code>bg</code> prop or any custom css.
      </p>

      <h3>Scrolling</h3>

      <p>You can use the navbarScroll prop in a <code>&lt;Sidebar&gt;</code> to enable vertical scrolling. See the Bootstrap docs for more information.</p>
    </section>

    <section>

      <h3 id="api">API</h3>

      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
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
              <br/>
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
              <br/>
              A callback fired when the <code>&lt;SidebarMenu&gt;</code> body collapses or expands.
            </td>
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
    </section>

    <section>

      <h3>Supported content</h3>

      <p>SidebarMenu come with built-in support for a handful of sub-components. Choose from the following as needed:</p>

      <br />

      <h4>SidebarMenu.Toggle</h4>

      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>elementType</td>
            <td></td>
            <td>Set a custom element for this component.</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h4>SidebarMenu.Navbar</h4>

      <table className="table table-bordered table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>as</td>
            <td>elementType</td>
            <td></td>
            <td>Set a custom element for this component.</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
}

export default GettingStarted;