import { Navbar, Nav, Dropdown, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiConversation } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
import "../components/style.css";
import { useColorMode } from '@chakra-ui/react';
import { isAuthenticated, removeToken,getToken,decodeToken } from '../authHelper';
import { useState,useEffect } from 'react';
const Header = () => {
  const { t, i18n } = useTranslation('common');
  const { colorMode } = useColorMode();
  const [profileUser,setProfileuser] = useState(true);
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(()=>{
    async function cargarUsuario(){
      if(!getToken()){
        setProfileuser(false)
        return;
      }
  }
    cargarUsuario();
  },[])
 
  useEffect(()=>{
    profileUser ? console.log(decodeToken(getToken())) : null ;
  },[profileUser])
  return (
    <Navbar expand="lg" style={{ backgroundColor: colorMode === 'dark' ? 'black' : '#0191CE' }}>
      <Navbar.Brand href="#home" style={{ backgroundColor: colorMode === 'dark' ? 'black' : '#0191CE' }}>
        <BiConversation size={30} style={{ color: colorMode === 'dark' ? 'white' : 'black' }} />
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

          {isAuthenticated() ? (
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          ) : (
            <li>
              <NavLink  to="/Register" className="mr-sm-2" >Sign In</NavLink></li>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
