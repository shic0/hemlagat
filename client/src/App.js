import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header.js'
import AboutPage from './components/AboutPage.js'
import Store from './components/Store.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import StartPage from './components/StartPage.js'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route component={StartPage} path='/' exact />
          <Route component={Store} path='/store' />
          <Route component={AboutPage} path='/about' />
          <Route component={Contact} path='/contact' />
          <Redirect to='/' />
        </Switch>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{!data ? "Loading..." : data}</h1>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;