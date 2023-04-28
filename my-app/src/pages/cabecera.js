import { Navbar, Nav, Dropdown, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiConversation } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
import "../components/style.css";

const Header = () => {
  const { t, i18n } = useTranslation('common');

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

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
          <button opacity="0" onClick={() => handleLanguageChange('en')} style={{ marginRight: 10, backgroundColor: 'transparent'}}><Icon icon="flag:gb-1x1" /></button>
          <button variant="light" onClick={() => handleLanguageChange('es')}><Icon icon="flag:es-1x1"/></button>
          <NavLink  to="/Register" className="mr-sm-2" >Sign In</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
