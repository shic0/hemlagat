import React, { useState, useEffect } from 'react'
import { Container, ListItemIcon, Box, Link, Grid, Typography, Button } from "@material-ui/core"; 
import { useHistory } from 'react-router-dom'
import olives from './img/olives.jpeg'

const StartPage = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <Container sx={{ mt: '1rem', maxWidth: '100vw'}}>

    <Box spacing={1} paddingLeft="20px" backgroundColor="gray" marginTop="30px">
      <Typography variant= "h3">Start Sidan</Typography>

      <Typography variant= "h4">Veckans Erbjudande</Typography>
      <Box display="flex" justifyContent="center"  /* flexDirection="column"  */item xs= {12} sm= {4}>
      <Grid display="flex" justifyContent="center" mt="20px" container spacing={4}>
        <Box margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Fisk</Typography>
          <img className='olives' src={olives} alt="Olives" />
          {/*  Länk till lägg tilll i varukorg?knapp */}
          <Typography>Ugnsbakad Torsk</Typography>
          <Typography>89 kronor</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Vegitariska</Typography>
          <img className='olives' src={olives} alt="Olives" />
          <Typography>Oliver</Typography>
          <Typography>20 kronor</Typography>
        </Box>
        <Box margin="20px" item xs= {12} sm= {4}>
          <Typography variant="h5">Kött</Typography>
          <img className='olives' src={olives} alt="Olives" />
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