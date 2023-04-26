import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiConversation } from 'react-icons/bi';
import "../components/style.css";
import {useTranslation} from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation('common');

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0191CE" }}>
      <Navbar.Brand href="#home">
        <BiConversation size={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <NavLink to="/horario" style={{ fontWeight: "bold", color: "white" }}>
          {t('header.horarios')} 
          </NavLink>
          <NavLink to="/HomeProfesorado" style={{ fontWeight: "bold", color: "white" }}>
          {t('header.profesorado')} 
          </NavLink>
          <NavLink to="/HomeAsignatura" style={{ fontWeight: "bold", color: "white" }}>
          {t('header.asignaturas')} 
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