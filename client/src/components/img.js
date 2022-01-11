import React from 'react'
import { AppBar, Toolbar, Container } from "@material-ui/core"

import mat from '/img/mat.jpeg'
import karta from '../img/karta.png'

const  Img = () => {
  return (

    <Container sx={{ mt: '1rem' }}>
                <img className='mat' src={mat} alt="Mat" />
                <img className='karta' src={karta} alt="Karta" />
  
    </Container>

  )
}
export default Img;