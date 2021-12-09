import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header.js'
import AboutPage from './components/AboutPage.js'
import Store from './components/Store.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import StartPage from './components/StartPage.js'
import GoodsList from './components/GoodsList.js'
import Search from './components/Search.js'
import { goods } from './data/goods'
import { Container } from '@material-ui/core'

function App() {
  const [data, setData] = React.useState(null);
  const [products, setProducts] = useState(goods);
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState([]);
  const [isSnackOpen, setSnackOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);


  console.log(products)
  
  const handleChange = (e) => {
    if (!e.target.value) {
        setProducts(goods);
        setSearch('');
        return;
    }

    setSearch(e.target.value);
    setProducts(
        products.filter((good) =>
            good.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
};

const addToOrder = (goodsItem) => {
  let quantity = 1;

  const indexInOrder = order.findIndex(
      (item) => item.id === goodsItem.id
  );

  if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(order.map((item) => {
              if (item.id !== goodsItem.id) return item;

              return {
                  id: item.id,
                  name: item.name,
                  description: goodsItem.description,
                  price: item.price,
                  quantity,
              };
          }),
      );
  } else {
      setOrder([
              ...order,
              {
                  id: goodsItem.id,
                  name: goodsItem.name,
                  description: goodsItem.description,
                  price: goodsItem.price,
                  quantity,
              },
          ],
      );
  }

  setSnackOpen(true);
};

const removeFromOrder = (goodsItem) => {
  setOrder(order.filter((item) => item.id !== goodsItem));
};
  

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    
    <Router>
      <div className="App">
        <Header />
        <div>
      <Container
            sx={{
                mt: '1rem'
            }}
        >
            <Search
                value={search}
                onChange={handleChange}
            />
      </Container>
      </div>
      
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
    </>
  );
}

export default App;