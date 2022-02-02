import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";


const Support = () => {
  const history = useHistory()
  return (
    <>

    <Container  class="padding" sx={{ mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>
      <Box spacing={1} textAlign="center">
        <Typography variant= "h3">
          Support
        </Typography>
        <Typography variant="body1">Behöver du hjälp med en order, eller anda funderingar?
        Här kan du snabbt få hjälp med alla dina frågor och funderingar</Typography>
        <Typography>
        Snart kommer du kunna nå oss på livechatten, där du kommer kunna modifiera, önska och tipsa om din favorit rätt.
        </Typography>
      </Box>
        </Container>
      <Box spacing={1} marginTop="300px" textAlign="center">
        <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
        <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
      </Box>
    </>
  )
}

export default Support
