import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from "@material-ui/core";
import mat from './img/mat.jpeg'

const AboutPage = () => {
  const history = useHistory()
  return (
    <>
    <Box height="60vh" backgroundColor="white" marginTop="30px">
      <Typography color="black" variant="h3">Om oss</Typography>
      <Typography variant="body1">Hemlagat startade 2021, när vi en dag..</Typography>
      <img className='mat' src={mat} alt="Mat" />
    </Box>

      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default AboutPage