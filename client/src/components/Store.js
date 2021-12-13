import React, { useState, useEffect } from 'react'
import GoodsList from './GoodsList.js'
import Search from './Search.js'
import Basket from './Basket.js'
import Snack from './Snack.js'
import { goods } from '../data/goods'
import { Container } from '@material-ui/core'
import BasketIcon from './BasketIcon.js'
import { useLocalStorage } from './useLocalStorage.js'


const Store = () => {
const [data, setData] = useState(useLocalStorage('order', []));

const [order, setOrder] = useState(()=>{
  const saved = localStorage.getItem('orders');
  const initialValue = JSON.parse(saved);
  return initialValue || [];
}, [])
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);
  
  
useEffect(() => {
localStorage.setItem('orders', JSON.stringify(order))
}, [order]);

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
                  description: item.description,
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

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <h2>MARKET</h2>
      <h4>köp sidan</h4>
      <p>{!data ? "Loading..." : data}</p>
      <BasketIcon 
          handleCart={() => setCartOpen(true)}
          orderLen={order.length}
        />
       
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
            <GoodsList
                goods={products}
                setOrder={addToOrder}
            />
      </Container>
      <Basket
            order={order}
            removeFromOrder={removeFromOrder}
            cartOpen={isCartOpen}
            closeCart={() => setCartOpen(false)}
        />
        <Snack
            isOpen={isSnackOpen}
            handleClose={() => setSnackOpen(false)}
        />
      </div>
    </>
  )
}

export default Store