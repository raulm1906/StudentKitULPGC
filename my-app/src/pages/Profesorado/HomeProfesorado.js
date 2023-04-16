import './HomeProfesorado.css'
import React, {useState} from 'react'
import SearchBar from '../../components/Busqueda/SearchBar';
import { SearchIcon }  from '@chakra-ui/icons'
import { ChevronDownIcon, HamburgerIcon }  from '@chakra-ui/icons'
import SearchHomeProfesorado from '../../components/Busqueda/SearchHomeProfesorado'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
function HomeProfesorado (){
    const [searchTerm, setSearchTerm] = useState('');
    const [Button, setButton] = useState('');
    const [newSubject, setAsignatura] = useState('')
  
    const handleItemClick = (item) => {
      setAsignatura(item)
  
  }
    const handleChange = event => {
      setSearchTerm(event.target.value);
    }
  return (
    
    <div id = "HomeAsignatura">
        <section id="SearchHomeAsignatura">
            <header id="CabeceraHomeSearch"> 
                <div id = "SearchBar"> <SearchIcon style={{marginTop: "auto", marginBottom: "auto"}} /><SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={"buscar..."}></SearchBar ></div>
                <div id ="OrderBy"><Menu>
                    <MenuButton as={Button} >
                        Ordenador por:
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Item de Ordenación</MenuItem>
                        <MenuItem>....</MenuItem>
                    </MenuList>
                    </Menu></div>
            </header>
            <div id ="ResultadoBusquedaHomeAsignatura">
                <SearchHomeProfesorado searchTerm={searchTerm} onItemClick={handleItemClick}></SearchHomeProfesorado>
            </div>
        </section>
        <div id="FilterHomeAsignatura">
            <header className='d-flex justify-content-between m-3' >
            <h2>Filtros</h2>
            <HamburgerIcon style={{marginTop: "auto", marginBottom: "auto"}} />
            </header>
        </div>
    </div>
  )
}
export default HomeProfesorado;