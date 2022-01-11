const express = require("express");
const path = require('path');
const fs = require('fs')
require('dotenv').config('.env')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

let products = []
try {
    const product = fs.readFileSync("products.json");
    products = JSON.parse(product);
} catch (err) {
    console.log('Faild loading products', err)
}

app.get('/product', async function (req, res) {
    res.json(products)
    //console.log(product);
});

app.post('/api/checkout-session_', async (req, res) => {
    try {
      const { cart } = req.body;
      const { token, currency, price } = req.body;
      console.log(cart)
      let carts = []
      cart.forEach((cart) => {
        let lineItem = {
          //description: session,
          price_data: {
            currency: "sek",
            product_data: {
              name: cart.title,
              images: [cart.image],
            },
            unit_amount: cart.price * 100,
          },
          quantity: cart.amount,
        };
        carts.push(lineItem);
      });
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: carts,
        mode: "payment",
        success_url: "http://localhost:3000/#/confirmation?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000/#/cancel",
      }
     );
  
      //----------------TEST------------------------
      /* if (carts === null) {
        return
      } else {
        const jsonString = JSON.stringify(carts, null, 2)
        fs.writeFile('./orders.json', jsonString, err => {
          if (err) {
            console.log('Error writing file', err)
          } else {
            console.log('Successfully wrote file')
          }
        })
      } */
      //----------------TEST------------------------
  
      res.status(201).json({ id: session.id })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error })
    }
  });

  app.post("/api/checkout-session", async (req, res) => {
    let { amount, id } = req.body
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "SEK",
        description: "Hemlagat",
        payment_method: id,
        confirm: true
      })
      console.log("Payment", payment)
      res.json({
        message: "Payment successful",
        success: true
      })
    } catch (error) {
      console.log("Error", error)
      res.json({
        message: "Payment failed",
        success: false
      })
    }
  })

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
