import React from 'react'
import "./App.css";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header.js'
import AboutPage from './components/AboutPage.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import StartPage from './components/StartPage.js'
import Store from './components/Store.js'


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route component={StartPage} path='/' exact />
          <Route component={AboutPage} path='/about' />
          <Route component={Contact} path='/contact' />
          <Route component={Store} path='/store' />
          <Redirect to='/' />
        </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
