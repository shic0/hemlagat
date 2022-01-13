import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from "@material-ui/core";

const Policy = () => {
    const history = useHistory()
    return (
      <>
  
       <Box height="60vh" backgroundColor="white" marginTop="30px">
        <Typography color="black" variant="h3">Policy</Typography>
        <Typography variant="body1">
        Våra policy är 100 % nöjd kund!</Typography>
      </Box>
  
        <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
        <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
      </>
    )
  }
  
  export default Policy