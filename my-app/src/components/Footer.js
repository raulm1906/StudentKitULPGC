import React, { useState } from 'react';
import { Image, useColorMode } from '@chakra-ui/react';
import imagen from "./logotipo_ULPGC.png";

import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa';

function Footer() {
  const [t, i18n] = useTranslation('common');
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={`footer ${colorMode === 'dark' ? 'dark' : 'light'}`}>
        <Image src={imagen} alt='ULPGC' />
        <h1>{t('footer.eiiStudent')}</h1>
        <h2><a>{t('footer.aboutUs')}</a></h2>
        <h2><a><Link to="/FAQ">{t('footer.terms')}</Link></a></h2>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        <h2><a>{t('footer.contact')}: eiistudentkit@gmail.com</a></h2>
        <button onClick={toggleColorMode}>{colorMode === 'dark' ? <FaSun /> : <FaMoon />}</button>
    </div>
  );
}

export default Footer;