import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";

const Policy = () => {
    const history = useHistory()
    return (
      <>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

       <Box style={{ marginTop: "30px" }} height="60vh" >
          <Typography color="black" variant="h3">
              Policy
          </Typography>
          <Typography variant="body1">
              Våra policy är 100 % nöjd kund!
          </Typography>
        </Box>
        <Box>
          <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
          <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
      </Box>
    </Container>
      </>
    )
  }
  
  export default Policy