import React from 'react'
import { Badge, IconButton, Toolbar } from "@material-ui/core"
import { ShoppingBasket } from "@material-ui/icons"

export default function BasketIcon ({handleCart, orderLen}) {

  return (
      <>

    <Toolbar>

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
    

</>
  )
}