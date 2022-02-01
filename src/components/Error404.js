import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";
import error404 from './img/error404.jpg'

const ErrorPage = () => {
  const history = useHistory()
  return (
    <>
    <Container>

     <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "30px" }} height="60vh"  >
       <Typography variant= "h3">
          Tyvärr sidan kan inte hitta!
        </Typography>
      <img className='karta' src={error404} alt="error404" />
        <Typography variant= "h5">
          Vänligen kontakta med kund service
        </Typography>
      <Typography>+46 (0) 70 77 26 830</Typography>
      <Typography>kundservice@hemlagat-mat.se</Typography>
      
    </Box>
    <Box style={{display: "flex", justifyContent: "space-evenly" }}>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
    
      
    </Container>
    </>
  )
}

export default ErrorPage