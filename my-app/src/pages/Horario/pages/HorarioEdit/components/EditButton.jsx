import { Button } from '@chakra-ui/button'
import React from 'react'
import { Icon } from '@chakra-ui/icon'
import { MdOutlineEdit } from 'react-icons/md'

export default function EditButton(props) {
  
    const handleEditButton = () => {
        const newStyles = {
            box: {
                marginLeft: "20px",
                transition: "0.5s ease all"
            },
            gridItem: {
                marginLeft: "320px",
                transition: "0.5s ease all"
            }
        }
        props.onStylesChange(newStyles)
    }

    return (
        <Button 
            onClick={handleEditButton} 
            borderRadius="20px"
            marginLeft="20px"
            bg="#DADADA"
            rightIcon={<Icon as={MdOutlineEdit} />} 
        >Editar Horario</Button>
        )
}
