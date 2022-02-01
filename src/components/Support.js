import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";


const Support = () => {
  const history = useHistory()
  return (
    <>
    <Container style={{ mt: '1rem', maxWidth: '100vw', minHeight: '500px'}}>
      <Box spacing={1} marginTop="30px" textAlign="center">
        <Typography variant= "h3">
          Support
        </Typography>
        <Typography variant="body1">
          Behöver du hjälp med en order, eller anda funderingar?
          Här kan du snabbt få hjälp med alla dina frågor och funderingar
        </Typography>
      </Box>
    </Container>
      <Box style={{display: "flex", justifyContent: "space-evenly" }}>
        <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
        <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
      </Box>
    </>
  )
}

export default Support