import React from 'react'
import { AppBar, Toolbar, Typography } from "@material-ui/core"

export default function Header () {

  return (
      <>
<AppBar position="static">
    <Toolbar>

        <Typography
            variant="h5"
            component="span"
            sx={{flexGrow: 1}}
            >
            HEMLAGAT
        </Typography>
        
        <div className='nav'>
            <a href='#/'>Start-Sida</a>
            <a href='#/store'>Handla</a>
            <a href='#/contact'>Kontakt</a>
            <a href='#/about'>Om oss</a>
        </div>
    </Toolbar>
    
</AppBar>
</>
  )
}