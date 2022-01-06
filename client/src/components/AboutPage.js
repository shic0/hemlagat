import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from "@material-ui/core";

const AboutPage = () => {
  const history = useHistory()
  return (
    <>
    <Box height="60vh" backgroundColor="white" marginTop="30px">
      <Typography color="black" variant="h3">Om oss</Typography>
      <Typography variant="body1">Hemlagat startade 2021, när vi en dag..</Typography>
      <Box component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Picture of meatballs"
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
    </Box>
    
      

      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default AboutPage