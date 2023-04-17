import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiConversation } from 'react-icons/bi';
import "../components/style.css"
const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0191CE" }}>
      <Navbar.Brand href="#home">
        <BiConversation size={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <NavLink to="/horario" style={{ fontWeight: "bold", color: "white" }}>
            Horarios
          </NavLink>
          <NavLink to="/HomeProfesorado" style={{ fontWeight: "bold", color: "white" }}>
            Profesores
          </NavLink>
          <NavLink to="/HomeAsignatura" style={{ fontWeight: "bold", color: "white" }}>
            Asignaturas
          </NavLink>
        </Nav>
        <Nav>
          <Nav.Link href="#" className="mr-sm-2" >Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;