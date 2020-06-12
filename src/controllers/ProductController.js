const mongoose = require('mongoose');

const Product = mongoose.model('Product', 'products');

module.exports = {
  async showAll(request, response) {
    return response.json(await Product.find());
  }
}