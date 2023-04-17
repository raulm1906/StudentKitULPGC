import './HomeProfesorado.css'
import React, {useState} from 'react'
import SearchBar from '../../components/Busqueda/SearchBar';
import { SearchIcon }  from '@chakra-ui/icons'
import { HamburgerIcon }  from '@chakra-ui/icons'
import SearchHomeProfesorado from '../../components/Busqueda/SearchHomeProfesorado'
import { Box, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'


function HomeProfesorado (){
    const [searchTerm, setSearchTerm] = useState('');
    const [newSubject, setAsignatura] = useState('')
    const [selected, setSelected] = useState("");

    const handleItemClick = (item) => {
      setAsignatura(item)
  
  }
  const handleCheckboxChange = (value) => {
    setSelected(value);
    console.log(value)
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
                    <MenuButton>
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
        <Box p={2} m={2} w='25%' direction={['column', 'row']} background='#EDECEC'>
            <Box className='d-flex justify-content-between m-2' >
            <h2>Filtros</h2>
            <HamburgerIcon style={{marginTop: "auto", marginBottom: "auto"}} />
            </Box>
            <Box>
            <CheckboxGroup value={selected}>
            <Checkbox value="option1" onChange={() => handleCheckboxChange("option1")}>Opción 1</Checkbox>
            <Checkbox value="option2" onChange={() => handleCheckboxChange("option2")}>Opción 2</Checkbox>
          </CheckboxGroup>
            </Box> 

        </Box>
    </div>
  )
}
export default HomeProfesorado;