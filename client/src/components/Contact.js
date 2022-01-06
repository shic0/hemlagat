import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, ListItemIcon, Typography, Button } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
/* import map from '../../src/img/map.hemlagat.png'
 */
const Contact = () => {
  const history = useHistory()
  return (
    <>
     <Box height="60vh" backgroundColor="white" marginTop="30px">
       <Typography variant= "h3">
      Kontakt</Typography>
      <Typography>031-44 33 00</Typography>
      <Typography>hemlagat@yourdoor.com</Typography>
     
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box>
        <ListItemIcon>
          <Button href="https://www.facebook.com/Hemlagat-107368028494671">Hemlagat Finns på Facebook<FacebookIcon /> </Button>
        </ListItemIcon>
      </Box>
      <Box>
        <ListItemIcon>
          <Button href="https://www.instagram.com/_hemlagat_/">ni hittar oss även på Instagram <InstagramIcon /></Button>
        </ListItemIcon>
      </Box>
    </Box>
    
      
    <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
    <Button onClick={() => history.push('/')} variant="outlined">Back to Start</Button>
    </>
  )
}

export default Contact