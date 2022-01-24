import React from 'react'
import { Container, Box, Grid, Typography } from "@material-ui/core"; 
import olives from './img/olives.jpeg'
import fisk from './img/fisk.jpg'
import pannbiff from './img/pannbiff.jpg'
import salat from './img/salat.jpg'

const StartPage = () => {

  return (
    <>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: '1rem', width: '100%' }}>
    <Box spacing={1} paddingLeft="20px" backgroundColor="gray" marginTop="30px" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant= "h4">Veckans Erbjudande</Typography>
      <Box display="flex" justifyContent="center"  flexDirection="column" item xs= {12} sm= {4}>
      <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={fisk} alt="fisk" />
          <Typography>Ugnsbakad Torsk</Typography>
          <Typography style={{ color: 'red' }}>89 SEK</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={olives} alt="Olives" />
          <Typography>Oliver</Typography>
          <Typography style={{ color: 'red' }}>49 SEK</Typography>
        </Box>
        </Grid>
        <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={pannbiff} alt="pannbiff" />
          <Typography>Pannbiffar i brunsås</Typography>
          <Typography style={{ color: 'red' }}>89 SEK</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={salat} alt="pannbiff" />
          <Typography>Sallader</Typography>
          <Typography style={{ color: 'red' }}>79 SEK</Typography>
        </Box>
      </Grid>
      </Box>
    </Box>
    </Container>
  </>
  )
}

export default StartPage