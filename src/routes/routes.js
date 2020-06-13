const express = require('express');
const ProductController = require('../controllers/ProductController.js');

const routes = express.Router();

routes.get('/products', ProductController.showAll);

routes.get('/products/:id', ProductController.showOne);

routes.post('/products', ProductController.addProduct);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.deleteOne);

routes.delete('/products', ProductController.deleteAll);

module.exports = routes;