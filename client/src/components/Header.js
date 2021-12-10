import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core"
import { ShoppingBasket } from "@material-ui/icons"

export default function Header ({handleCart, orderLen}) {

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
        <IconButton
            color="inherit"
            onClick={handleCart}
            >
            <Badge
                color="secondary"
                badgeContent={orderLen}
                >
                
                <ShoppingBasket />
            </Badge>
        </IconButton>



    </Toolbar>
    
</AppBar>
</>
  )
}