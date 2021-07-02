import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalThemeContext } from '../../contexts'

const MainMenu = () => {
  const context = useContext(GlobalThemeContext);

  return <Navbar className="main-header" bg={context?.bg} variant={context?.bg} expand={context?.collapse}>
    <Navbar.Brand className="d-block d-lg-none"><span className="react-bootstrap-img" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/getting-started">Getting Started</Nav.Link>
        <Nav.Link as={Link} to="/examples">Examples</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default MainMenu;