import React, { useState, useEffect } from 'react';
import { Divider, Box, Heading, Button, Stack, Text, Flex, Icon } from '@chakra-ui/react';
import { Checkbox, useCheckboxGroup, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import SearchBar from '../../components/Busqueda/SearchBar';
import SearchProfesores from '../../components/Busqueda/SearchProfesores';
import './profesorado.css';

function Profesor(profesor) {

  return (

    <div className='d-flex'>
    <div id = "leftFrame" className='float-left h-100'>
        content
    </div>

    <div id="filterFrame" className='float-right'>
      <Search2Icon/>
    </div>
    </div>
  );
}

export default Profesor;