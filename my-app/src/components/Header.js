import React from "react"
import '../components/header.css'
import { GrSchedules } from 'react-icons/gr'
import { ImUserTie } from 'react-icons/im'



function Header() {
    return (
        <header>
        <nav id="navbar">
            <div id="logoContainer">
                <img src="#"/>
            </div>
            <ul>
                <li><a href="#" className="textLink">Horario</a></li>
                <li><a href="#" className="textLink">Profesorado</a></li>
                <li><a href="#" className="textLink">Asignaturas</a></li>
            </ul>
            <a href="#" id="userButton" className="textLink">Pepe Fernandez Hernandez</a>    
        </nav>
    </header>
    );
  }

  export default Header