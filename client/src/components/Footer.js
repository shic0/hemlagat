import React from 'react'
/* import { useHistory } from 'react-router-dom' */
import { Container, ListItemIcon, Box, Link, Grid, Typography, Button } from "@material-ui/core"; 
import { AppBar, Toolbar } from "@material-ui/core"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    
      <Container color="red" sx={{ mt: '1rem' }}>
        <Grid textAlign="center" container sparing ={5}>
          <Grid item xs= {12} sm= {4}>
            <Box borderBotton = {1}><Typography>Hjälp</Typography></Box>
            <Box>
              <Link underline="hover" href="#/support" color="inherit">
              <Typography>Support</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/privacy-policies" color="inherit">
              <Typography>Privacy</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="#/contact" color="inherit">
              <Typography>Kontakta Oss</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs= {12} sm= {4}>
            <Box borderBotton = {1}><Typography>Ditt Konto</Typography></Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography>Logga In</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography>Registering</Typography>
              </Link>
            </Box>
            <Box>
              <Link underline="hover" href="/" color="inherit">
              <Typography> Din Order</Typography>
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs= {12} sm= {4}>
            <Box >
              <Typography borderBotton = {1}>Besök oss på HEMLAGAT</Typography>
            </Box>
            <Box>
              <Link href="https://www.google.com/maps/place/Skanstorget+3,+411+22+G%C3%B6teborg/@57.6957226,11.9570257,17z/data=!3m1!4b1!4m5!3m4!1s0x464ff36b9be81b9b:0x638bd5988122b6e0!8m2!3d57.6957198!4d11.9592144" color="inherit">
                <Typography>
                Skanstorget 3 Göteborg
                </Typography>
              </Link>
            </Box>
            <Box>
                <ListItemIcon>
                  <Button href="https://www.facebook.com/Hemlagat-107368028494671"><FacebookIcon /> </Button>
                </ListItemIcon>
                <ListItemIcon>
                  <Button href="https://www.instagram.com/_hemlagat_/"><InstagramIcon /></Button>
                </ListItemIcon>
            </Box>
            
          </Grid>
        </Grid>
      </Container>      
    
  )
}

export default Footer;
