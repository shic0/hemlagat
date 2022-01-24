import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Container } from "@material-ui/core"
import logo from './logo.png'

//import style from './Menu.module.scss'; // reserverad


const Header = () => {
  const numberOfProducts = useSelector((state) => state.cart.length);

  return (
    <Container style={{ marginTop: '1rem', marginBottom: '1rem'}}>
    <AppBar position="static">
        <Toolbar>
            <Link to="/"><img className='logo' src={logo} alt="Logo" /></Link>
            <div className='nav'>
                <Link style={{ color: 'white' }} to="/store"><span role="img" aria-label="sheep">Butik</span></Link>
                <Link style={{ color: 'white' }} to="/contact"><span role="img" aria-label="sheep">Kontakt</span></Link>
                <Link style={{ color: 'white' }} to="/about"><span role="img" aria-label="sheep">Om oss</span></Link>
                <Link style={{ color: 'white' }} to="/cart"><span role="img" aria-label="sheep">🛒{numberOfProducts}</span></Link>
            </div>
        </Toolbar>
    </AppBar>
</Container>
  );
};

export default Header;
