import React from 'react'
import { Container, Box, Grid, Typography } from "@material-ui/core"; 
import olives from './img/olives.jpeg'
import fisk from './img/fisk.jpg'
import pannbiff from './img/pannbiff.jpg'
import salat from './img/salat.jpg'
import Cookies from './Cookies.js'
import InfoAlert from './InfoAlert.js'

const StartPage = () => {

  return (
    <>
  <Container sx={{padding:'0', mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>
    <InfoAlert/>
    <Cookies />
    <Box spacing={1} marginTop="30px" textAlign="center">
      <Typography variant= "h3">
        Veckans Erbjudanden
      </Typography>
      <Box display="flex" justifyContent="center"  flexDirection="column" item xs= {12} sm= {4}>
      <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={fisk} alt="fisk" />
          <Box style={{ textAlign: 'center' }}>
            <Typography>Ugnsbakad Torsk</Typography>
            <Typography style={{ color: 'red' }}>69 SEK</Typography>
          </Box>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={olives} alt="Olives" />
          <Box style={{ textAlign: 'center' }}>
            <Typography>Oliver</Typography>
            <Typography style={{ color: 'red' }}>20 SEK</Typography>
          </Box>
        </Box>

        
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={pannbiff} alt="pannbiff" />
          <Box style={{ textAlign: 'center' }}>
            <Typography>Pannbiffar i brunsås</Typography>
            <Typography style={{ color: 'red' }}>59 SEK</Typography>
          </Box>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={salat} alt="sallad" />
          <Box style={{ textAlign: 'center' }}>
            <Typography>Sallad</Typography>
            <Typography style={{ color: 'red' }}>59 SEK</Typography>
          </Box>
        </Box>

        <Box margin="20px" item xs= {12} sm= {4}>
          <img className='olives' src={olives} alt="Olives" />
          <Box style={{ textAlign: 'center' }}>
            <Typography>Oliver</Typography>
            <Typography style={{ color: 'red' }}>20 SEK</Typography>
          </Box>
        </Box>
      </Grid>
      </Box>
    </Box>
  </Container>
  </>
  )
}

export default StartPage