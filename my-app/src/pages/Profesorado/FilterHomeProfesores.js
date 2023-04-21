import React,{useState} from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
function FilterHomeProfesores({ asignaturas, onAsignaturaSelect}) {
  const [selectedAsignaturas, setSelectedAsignaturas] = useState([]);

  const checkboxes = asignaturas.map((string) => (
    <MenuItemOption
      value={string}
      key={string}
      onClick={() => {
        const isSelected = selectedAsignaturas.includes(string);
        if (isSelected) {
          setSelectedAsignaturas(selectedAsignaturas.filter((a) => a !== string));
        } else {
          setSelectedAsignaturas([...selectedAsignaturas, string]);
        }
        onAsignaturaSelect(selectedAsignaturas);
      }}
    >
      {string}
    </MenuItemOption>
  ));



  return <Menu closeOnSelect={false}>
  <MenuButton as={Button}>
    Asignaturas <ChevronDownIcon></ChevronDownIcon>
  </MenuButton>
  <MenuList minWidth="240px" maxHeight="20rem" overflowY="scroll">
    <MenuOptionGroup title="Country" type="checkbox">
      {checkboxes}
    </MenuOptionGroup>
  </MenuList>
</Menu>
}

export default FilterHomeProfesores;
