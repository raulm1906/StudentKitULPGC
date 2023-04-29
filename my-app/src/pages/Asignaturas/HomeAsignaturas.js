import React, {useState} from 'react'
import './HomeAsignatura.css'
import SearchBar from '../../components/Busqueda/SearchBar';
import { SearchIcon }  from '@chakra-ui/icons'
import {HamburgerIcon }  from '@chakra-ui/icons'
import SearchHomeAsignatura from '../../components/Busqueda/SearchHomeAsignatura'
import { Drawer, DrawerBody, Button, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import {useTranslation} from "react-i18next";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box
  } from '@chakra-ui/react'

export default function HomeAsignaturas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [Button, setButton] = useState('');
  const [t, i18n] = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  return (
    <div id = "HomeAsignatura">
        <section id="SearchHomeAsignatura">
            <header id="CabeceraHomeSearch"> 
            <div id = "SearchBar"> <SearchIcon style={{marginTop: "auto", marginBottom: "auto"}} /><SearchBar searchTerm={searchTerm} handleChange={handleChange} Placeholder={t('general.placeholderBuscar')} ></SearchBar ></div>
                <div id ="OrderBy"><Menu>
                    <MenuButton as={Button} >
                    {t('profesorado.ordenar')}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>{t('profesorado.itemOrder')}</MenuItem>
                        <MenuItem>....</MenuItem>
                    </MenuList>
                    <Button ml={4} colorScheme="teal" size="sm" onClick={onOpen}>
                        Use Filters
                    </Button>
                    </Menu></div>
            </header>
            <div id ="ResultadoBusquedaHomeAsignatura">
                <SearchHomeAsignatura searchTerm={searchTerm} ></SearchHomeAsignatura>
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
          <DrawerFooter>
            {/* any footer content goes here */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}