const express = require('express');
const ProductController = require('../controllers/ProductController.js');

const routes = express.Router();

routes.get('/products', ProductController.showAll);


module.exports = routes;