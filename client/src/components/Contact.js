import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ListItemIcon, Typography, Button } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import karta from './img/karta.png'

const Contact = () => {
  const history = useHistory()
  return (
    <>
     <Box height="60vh" backgroundColor="white" marginTop="30px">
       <Typography variant= "h3">
      Kontakt</Typography>
      <Typography>031-44 33 00</Typography>
      <Typography>hemlagat@yourdoor.com</Typography>
      <Box>
        <ListItemIcon>
          <Button href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /> </Button>
          <Button href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Button>
        </ListItemIcon>
      </Box>
      <img className='karta' src={karta} alt="Karta" />
     
    
    </Box>
    
      
    <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
    <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default Contact