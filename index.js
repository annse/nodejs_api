const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const products = [
    {
        id: 1,
        name: 'phone',
        price: 500
    },
    {
        id: 2,
        name: 'tablet',
        price: 700
    }
];

//get
app.get('/products', (req, res) => res.json(products));

//post
app.post('/products', (req, res) => {
    products.push(req.body);
    res.json(req.body);
});

//put
app.put('/products/:id', (req, res) => {

    const product = products.find( p => p.id === +req.params.id);
    const productIndex = products.indexOf(product);
    const newProduct = {...product, ...req.body};
    products[productIndex] = newProduct;
    res.json(newProduct);
});

//delete
app.delete('/products/:id', (req, res) => {
    const product = products.find( p => p.id === +req.param.id);
    const productIndex = products.indexOf(product);
    products.splice(productIndex, 1);
    res.json({success: true});
});

app.listen(3000, () => console.log('server is running on port 3000'));