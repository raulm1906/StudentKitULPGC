import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';

import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import '../App.css';

function Footer() {

  return (
    <div className='footer'>
        <Image src='https://via.placeholder.com/150' alt='Dan Abramov' />
        <h1>EII Student Kit</h1>
        <h2><a>About Us</a></h2>
        <h2><a>Terms</a></h2>
        <BsTwitter />
        <AiFillGithub />
        <h2><a>Contacto: admin@placeholder.com</a></h2>
    </div>
  );
}

export default Footer;