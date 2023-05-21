import { Navbar, Nav, Dropdown, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BiConversation } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
import "../components/style.css";
import {useColorMode, Box, IconButton, Menu, MenuButton, MenuList, MenuItem, Badge } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { isAuthenticated} from '../authHelper';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Header = ({usr}) => {

  const [userData, setUserData] = useState(null);
  const { t, i18n } = useTranslation('common');
  const { colorMode } = useColorMode();
  const [profileUser,setProfileuser] = useState(true);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };
 
  const fetchData = async () => {
    const id = localStorage.getItem('id');
    try {
      const response = await axios.get(`https://django.narurm.eu/usuarios/${id}`);
      setUserData(response.data); // Guardar los datos en la variable userData
    } catch (error) {
      console.log("Usuario no logeado")
    }
  };

  useEffect(() => {


    fetchData(); // Llamar a la función de consulta cuando el componente se monta

    // Si deseas agregar una limpieza al desmontar el componente,
    // puedes devolver una función de limpieza en el useEffect.
    // Por ejemplo, si deseas cancelar la solicitud si el componente se desmonta:
    // return () => {
    //   source.cancel();
    // };
  }, []);

  const LogOut = (event) =>{
    setUserData(null)
    localStorage.removeItem('id')
    fetchData();
  }
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

          {userData != null ? (
            <li>
              <Box>
                <Badge borderRadius='full' px='2' colorScheme='teal' margin={"2"} fontSize={"lg"} marginLeft={"5"}>
                  {userData.username}
                </Badge>                
                <Menu>
                  <MenuButton as={IconButton} variant="ghost" icon={<HamburgerIcon />} size="lg" />
                  <MenuList>
                    <MenuItem onClick={LogOut}>LogOut</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              
            </li>
          ) : (
            <li>
              <NavLink  to="/Register" className="mr-sm-2" px='2' colorScheme='teal' margin={"2"} fontSize={"lg"} marginLeft={"5"} >Sign In</NavLink></li>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
