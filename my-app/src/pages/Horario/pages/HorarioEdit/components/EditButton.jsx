import { Button } from '@chakra-ui/button'
import React from 'react'
import { Icon } from '@chakra-ui/icon'
import { MdOutlineEdit } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useColorMode } from '@chakra-ui/react';

export default function EditButton(props) {
    const [t, i18n] = useTranslation('common');
    const { colorMode, toggleColorMode } = useColorMode();
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
            bg={colorMode === 'dark' ? "#313535" : "#DADADA"}
            rightIcon={<Icon as={MdOutlineEdit} />} 
        >{t('ResultAsignaturas.editarHorario')}</Button>
        )
}
