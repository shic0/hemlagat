import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Box, Button, Toolbar, Container } from "@material-ui/core"
import logo from './logo.png'
import { useHistory } from 'react-router-dom'

//import style from './Menu.module.scss'; // reserverad


const Header = () => {
  const numberOfProducts = useSelector((state) => state.cart.length);
  const history = useHistory()
  return (
  <Container style={{ marginTop: '1rem', marginBottom: '1rem'}}>
    <AppBar position="fixed">
        <Toolbar>
            <Link to="/"><img className='logo' src={logo} alt="Logo" /></Link>
            <div className='nav'>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/store"><span role="img" aria-label="sheep">Butik</span></Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact"><span role="img" aria-label="sheep">Kontakt</span></Link>
                <Link style={{ color: 'white', textDecoration: 'none' }} to="/about"><span role="img" aria-label="sheep">Om oss</span></Link>
            </div>
            <Box>
            <Button  style={{ color: 'white', backgroundColor: 'skyblue', textDecoration: 'none' }} onClick={() => history.push('/cart')} variant="outlined"><span role="img" aria-label="sheep">🛒{numberOfProducts}</span></Button> 
{/*               <Link variant="outlined" style={{ color: 'white', textDecoration: 'none' }} to="/cart"><span role="img" aria-label="sheep">🛒{numberOfProducts}</span></Link>
 */}            </Box>
        </Toolbar>
       
    </AppBar>
  
  </Container>
  );
};

export default Header;
