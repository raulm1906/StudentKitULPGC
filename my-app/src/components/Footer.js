import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';

import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import {useTranslation} from "react-i18next";

function Footer() {
  const [t, i18n] = useTranslation('common');

  return (
    <div className='footer'>
        <Image src='https://via.placeholder.com/150' alt='Dan Abramov' />
        <h1>{t('footer.eiiStudent')}</h1>
        <h2><a>{t('footer.aboutUs')}</a></h2>
        <h2><a>{t('footer.terms')}</a></h2>
        <BsTwitter />
        <AiFillGithub />
        <h2><a>{t('footer.contact')}: admin@placeholder.com</a></h2>
    </div>
  );
}

export default Footer;