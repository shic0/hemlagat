import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from "@material-ui/core";


const Support = () => {
  const history = useHistory()
  return (
    <>
     <Container sx={{ mt: '1rem' }}>
        <AppBar position="static">
            <Toolbar>
                <div className='nav'>
                    <a href='#/'>Start-Sida</a>
                    <a href='#/store'>Handla</a>
                    <a href='#/contact'>Kontakt</a>
                    <a href='#/about'>Om oss</a>
                </div>
            </Toolbar>
        </AppBar>
    </Container>

     <Box height="60vh" backgroundColor="white" marginTop="30px">
      <Typography color="black" variant="h3">Support</Typography>
      <Typography variant="body1">Vill du ha hjälp med en order?
      Här kan du snabbt få hjälp med alla dina frågor och funderingar</Typography>
      <img className='' src={} alt="" />
    </Box>

      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default Support