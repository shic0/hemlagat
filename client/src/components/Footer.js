import React from 'react'
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"

const Footer = () => {
  
  return (
    <AppBar position="static">
      <Container 
      
      >
      <Toolbar>

      <Typography
        variant="h5"
        component="span"
        sx={{flexGrow: 1}}
        >
          
      
        <div className='nav'>
        <a href='www.facebook.com'>Facebook</a> 
            <a href='www.instagram.com'>Instagram</a>
          
        </div>
        Hemlagat online food service, made with ♡ in Gothenburg, Sweden. By students of MedieInstitutet.
      </Typography>
      </Toolbar>
        </Container>
  </AppBar>
    


    
  )
}

export default Footer