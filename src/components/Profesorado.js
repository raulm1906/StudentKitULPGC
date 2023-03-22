  import React, { useState, useEffect } from 'react';
  import { Divider, Box, Heading, Button, Stack, Text, Flex } from '@chakra-ui/react';
  import { Checkbox, useCheckboxGroup, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
  import { AiFillGithub } from 'react-icons/ai';

  import './profesorado.css';

  function Profesorado() {
    const [data, setData] = useState([]);
    const [isChecked, setIsChecked] = useState([false, false, false, false]);
    const [searchValue, setSearchValue] = useState('');

    const handleCheckboxChange = (index) => {
      const newChecked = [...isChecked];
      newChecked[index] = !newChecked[index];
      setIsChecked(newChecked);
    };

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    const filteredData = data.filter(photo =>
      photo.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <>

        <Input
            type="text"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            placeholder="Buscar"
            width='50%'
            borderRadius='10px'
        />

        <Menu>
          <MenuButton as={Button} rightIcon={<AiFillGithub />}>
            Ordenar por: Item de ordenación
          </MenuButton>
          <MenuList>
            <MenuItem>Ordernar por: curso</MenuItem>
            <MenuItem>Ordenar por: professor</MenuItem>
            <MenuItem>Ordenar por: orden alfabético</MenuItem>
          </MenuList>
        </Menu>

        <div className='scrollbox'>
          <h1>Hola Mundo</h1>
          {filteredData.map(photo => (
            <div className='info' key={photo.id}>
              <h1>{photo.title}</h1>
              <h2>{photo.thumbnailUrl}</h2>
              <h3>{photo.thumbnailUrl}</h3>
              <Divider orientation='horizontal' />
            </div>
          ))}
        </div>
        <div className='filtros'>
        <Box bg='gray' w='100%' p={4} color='white'>
        <Flex 
          flexDirection='row'
          justifyContent='space-between'
        >
          <Text fontSize='2xl'>Filtros</Text>
          <Button
                size='md'
                border='10px'
                bg='darkgray'
            >
            <AiFillGithub />
          </Button>
        </Flex>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox colorScheme='red' defaultChecked>
            Primer Filtro
          </Checkbox>
          <Checkbox colorScheme='green' defaultChecked>
            Segundo Filtro
          </Checkbox>
          <Checkbox colorScheme='green' defaultChecked>
            Tercer Filtro
          </Checkbox>
          <Checkbox colorScheme='green' defaultChecked>
            Cuatro Filtro
          </Checkbox>
        </Stack>
        </Box>

        <Button
              size='md'
              border='10px'
              width='200px'
              borderColor='orange'
              bg='orange'
              margin='5%'
              padding='5%'
          >
          Aplicar
          </Button>
        </div>
      </>
    );
  }

  export default Profesorado;