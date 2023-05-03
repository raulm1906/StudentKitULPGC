import './HomeProfesorado.css'
import React, {useState,useEffect} from 'react'
import SearchBar from '../../components/Busqueda/SearchBar';
import { SearchIcon }  from '@chakra-ui/icons'
import { HamburgerIcon }  from '@chakra-ui/icons'
import SearchHomeProfesorado from '../../components/Busqueda/SearchHomeProfesorado';
import { Drawer, DrawerBody, Button, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { Box} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

  } from '@chakra-ui/react'
import FilterHomeProfesores from './FilterHomeProfesores';
import profesores from '../../data/profesores.json';
import { useTranslation } from 'react-i18next';
function HomeProfesorado () {

    const [t, i18n] = useTranslation('common');
    const [searchTerm, setSearchTerm] = useState('');
    const [, setSelectedAsignatura] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAsignaturaSelect = (asignatura) => {
      setSelectedAsignatura(selectedAsignatura => [...selectedAsignatura, asignatura]);
    };

    const handleChange = event => {
      setSearchTerm(event.target.value);
    }
  
  
  function getAsignaturasSinParentesis() {
    const asignaturasSinParentesis = profesores
      .map((element) => element.asignaturas)
      .flat()
      .filter((asignatura) => !/\(|\)/.test(asignatura))
      .sort()
      return [...new Set(asignaturasSinParentesis)];
  }
  return (
    
    <div id = "HomeAsignatura">
        <section id="SearchHomeAsignatura">
            <header id="CabeceraHomeSearch"> 
                <div id = "SearchBar"> <SearchIcon style={{marginTop: "auto", marginBottom: "auto"}} /><SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('general.placeholderBuscar')} ></SearchBar ></div>
                <div id ="OrderBy">
                  <Menu>
                    <MenuButton as={Button}>
                    {t('profesorado.ordenar')}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>{t('profesorado.itemOrder')}</MenuItem>
                        <MenuItem>....</MenuItem>
                    </MenuList>
                    <Button ml={4} colorScheme="teal" size="sm" onClick={onOpen}>
                        Use Filters
                    </Button>
                    </Menu>
                </div>
            </header>
            <div id ="ResultadoBusquedaHomeAsignatura">
                <SearchHomeProfesorado searchTerm={searchTerm} ></SearchHomeProfesorado>
            </div>
        </section>
        {/*
        <Box p={2} m={2} w='25%' borderRadius={"10px"} direction={['column', 'row']} background='#EDECEC'>
        <Box className='d-flex justify-content-between m-2'>
          <h2>{t('profesorado.filters')}</h2>
          <HamburgerIcon style={{marginTop: "auto", marginBottom: "auto"}} />
        </Box>
      </Box>
      */}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t('profesorado.filters')}</DrawerHeader>
          <DrawerBody>
            <FilterHomeProfesores onAsignaturaSelect={handleAsignaturaSelect} asignaturas={getAsignaturasSinParentesis()} />
          </DrawerBody>
          <DrawerFooter>
            {/* any footer content goes here */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
export default HomeProfesorado;