import React, { useEffect } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/pages/Home/Home';
import InfoAlert from './components/InfoAlert.js';
import Header from './components/molecules/Menu/Menu';
import Cart from './components/pages/Cart/Cart';
import Checkout from './components/pages/Checkout/Checkout';
import { getCartFromStorage } from './store/actions/cartActions';
import Success from './components/pages/Success/Success';
import AboutPage from './components/AboutPage.js'
import Contact from './components/Contact.js'
import Support from './components/Support.js'
import Policy from './components/Policy.js'
import Terms from './components/Terms.js'
import Footer from './components/Footer.js'
import StartPage from './components/StartPage.js'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <InfoAlert />
      <Header />
      <Switch>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
        <Route path="/store" exact>
          <Home />
        </Route>
        <Route component={StartPage} path='/' exact />
        <Route component={AboutPage} path='/about' />
        <Route component={Contact} path='/contact' />
        <Route component={Support} path='/support' />
        <Route component={Policy} path='/policy' />
        <Route component={Terms} path='/terms' />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
