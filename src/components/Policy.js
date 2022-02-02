import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";

const Policy = () => {
    const history = useHistory()
    return (
      <>

    <Container class="padding" sx={{ mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>
      <Box spacing={1} textAlign="center">

        <Typography variant= "h3">
          Integritetspolicy
        </Typography>
        <Typography class="padding" variant="body1">
          Våra policy är 100 % nöjd kund!
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
  
  export default Policy