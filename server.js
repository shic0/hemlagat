const express = require("express");
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 3001;

const app = express();

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



// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
