import React, {useState} from 'react'
import './HomeAsignatura.css'
import SearchBar from '../../components/Busqueda/SearchBar';
import { SearchIcon }  from '@chakra-ui/icons'
import {HamburgerIcon }  from '@chakra-ui/icons'
import SearchHomeAsignatura from '../../components/Busqueda/SearchHomeAsignatura'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box
  } from '@chakra-ui/react'

export default function HomeAsignaturas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [Button, ] = useState('');
  const [, setAsignatura] = useState('')

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
                <SearchHomeAsignatura searchTerm={searchTerm} onItemClick={handleItemClick}></SearchHomeAsignatura>
            </div>
        </section>
        <Box p={2} m={2} w='25%' borderRadius={"10px"} direction={['column', 'row']} background='#EDECEC'>
        <Box className='d-flex justify-content-between m-2' >
            <h2>Filtros</h2>
            <HamburgerIcon style={{marginTop: "auto", marginBottom: "auto"}} />
            </Box>
            <Box>
              
            </Box> 
        </Box>
    </div>
  )
}
