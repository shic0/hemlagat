import React from 'react'
/* import { useHistory } from 'react-router-dom' */
import { Container } from "@material-ui/core";
import { ListItemIcon, Box, Typography, Button } from "@material-ui/core"; 
import fire from './img/fire.jpeg'
import { AppBar, Toolbar, Container } from "@material-ui/core"


const Footer = () => {
  return (
  <Box>            
  <Button href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /> </Button>
  <Button href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Button>
  <img className='fire' src={fire} alt="Fire" />
  </Box>           
  
  )
}

export default Footer;
