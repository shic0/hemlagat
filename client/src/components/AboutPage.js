import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from "@material-ui/core";

const AboutPage = () => {
  const history = useHistory()
  return (
    <>
    <Box height="65vh" backgroundColor="white" marginTop="30px">
      <Typography color="black" variant="h3">Om oss</Typography>
      <Typography variant="body1">Hemlagat startade 2021, när vi en dag..</Typography>
      

    
    </Box>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default AboutPage