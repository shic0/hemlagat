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
    
  <Box spacing={1} height="60vh" backgroundColor="red" marginTop="30px">
    <Typography variant= "h3">Start Sidan</Typography>

    <Typography variant= "h3">Veckans Erbjudande</Typography>
    <Box display="flex" justifyContent="center" mt="20px">
      <Box>
        <Typography variant="body1">Fisk</Typography>
        <img className='olives' src={olives} alt="Olives" />
        {/*  Länk till lägg tilll i varukorg?knapp */}
        <Typography>Ugnsbakad Torsk</Typography>
        <Typography>89 kronor</Typography>
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Typography variant="body1">Vegitariska</Typography>
        <img className='olives' src={olives} alt="Olives" />
        <Typography>Oliver</Typography>
        <Typography>20 kronor</Typography>
      </Box>
      <Box>
        <Typography variant="body1">Kött</Typography>
        <img className='olives' src={olives} alt="Olives" />
        <Typography>Pannbiffar i brunsås</Typography>
        <Typography>89 kronor</Typography>
      </Box>
      
    </Box>
    </Box>
   
    </>
  )
}

export default StartPage