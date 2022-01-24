import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ListItemIcon, Typography, Button, Container } from "@material-ui/core";
//import FacebookIcon from '@mui/icons-material/Facebook';
//import InstagramIcon from '@mui/icons-material/Instagram';
import karta from './img/karta.png'

const Contact = () => {
  const history = useHistory()
  return (
    <>
    <Container>

     <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "30px", backgroundColor: "white" }} height="60vh"  >
       <Typography variant= "h3">
          Kontakt
        </Typography>
      <Typography>+46 (0) 70 77 26 830</Typography>
      <Typography>kundservice@hemlagat-mat.se</Typography>
      <Typography>Öppettider: Mån-Sön 11.45-23.45</Typography>
      <Box>
        <ListItemIcon>
          <Button href="https://www.facebook.com/Hemlagat-107368028494671"> </Button>
          <Button href="https://www.instagram.com/_hemlagat_/"></Button>
        </ListItemIcon>
      </Box>
      <img className='karta' src={karta} alt="Karta" />
    </Box>
    <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
    <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    
      
    </Container>
    </>
  )
}

export default Contact