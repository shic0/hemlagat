

import React from 'react'
import { Container, Box, Grid, Typography } from "@material-ui/core"; 
//import { useHistory } from 'react-router-dom'
import olives from './img/olives.jpeg'
/* import pannbiff from './img/pannbiff.jpeg' */

const StartPage = () => {

  

  return (
    <>
  <Container sx={{ mt: '1rem', maxWidth: '100vw'}}>

    <Box spacing={1} marginTop="30px" textAlign="center">
      <Typography variant= "h3">Start Sidan</Typography>

      <Typography variant= "h4">Veckans Erbjudande</Typography>
      <Box display="flex" justifyContent="center"  /* flexDirection="column"  */item xs= {12} sm= {4}>
      <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
        <Box maxWidth="100vw" margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Fisk</Typography>
          <img className='pic-size' src={olives} alt="Olives" />
          {/*  Länk till lägg tilll i varukorg?knapp */}
          <Typography>Ugnsbakad Torsk</Typography>
          <Typography>89 kronor</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Vegitariska</Typography>
          <img className='pic-size' src={olives} alt="Olives" />
          <Typography>Oliver</Typography>
          <Typography>20 kronor</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Kött</Typography>
          <img className='pic-size' src={olives} alt="Pannbiffar" />
          <Typography>Pannbiffar i brunsås</Typography>
          <Typography>89 kronor</Typography>
        </Box>
      </Grid>
      </Box>
    </Box>
  </Container>
  
   

    </>
  )
}

export default StartPage