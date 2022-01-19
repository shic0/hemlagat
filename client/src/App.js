import React from 'react'
import "./App.css";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import InfoAlert from './components/InfoAlert.js'
import Header from './components/Header.js'
import AboutPage from './components/AboutPage.js'
import Contact from './components/Contact.js'
import Support from './components/Support.js'
import Policy from './components/Policy.js'
import Footer from './components/Footer.js'
import StartPage from './components/StartPage.js'
import Store from './components/Store.js'


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <InfoAlert />
        <Header />
        <Switch>
          <Route component={StartPage} path='/' exact />
          <Route component={AboutPage} path='/about' />
          <Route component={Contact} path='/contact' />
          <Route component={Support} path='/support' />
          <Route component={Policy} path='/policy' />

          <Route path='/store'>
              <Store />
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
