import React from 'react'
import '../components/style.css';
import {BiConversation} from 'react-icons/bi'
import { ChakraProvider } from '@chakra-ui/react'
import {router} from '../components/router'
import {Link, RouterProvider} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
function Header (){
    return (
          <nav id="cabecera">
            <span  className="lefticon"> <BiConversation /></span>
            <div className="centralnav">
                <NavLink to="#">Horario</NavLink>
                <Link to=".\Profesorado">Profesorado</Link>
                <NavLink to=".\Asignatura">Asignaturas</NavLink>

            </div>
            <label className="username" type="text">Nombre de Usuario</label>
          </nav>
      );
    }
export default Header