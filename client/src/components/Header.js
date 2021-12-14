import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import logo from '../img/logo.png'

const  Header = () => {
  return (
        <AppBar position="static">
            <Toolbar>
                <img className='logo' src={logo} alt="Logo" />
                <div className='nav'>
                    <a href='#/'>Start-Sida</a>
                    <a href='#/store'>Handla</a>
                    <a href='#/contact'>Kontakt</a>
                    <a href='#/about'>Om oss</a>
                </div>
            </Toolbar>
        </AppBar>
  )
}
export default Header;