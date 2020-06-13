const mongoose = require('mongoose');


const Product = mongoose.model('Product', 'products');

module.exports = {
  async showAll(request, response) {
    const { page } = request.query;

    return response.json(await Product.paginate({}, {page, limit: 10}));;
  },

  async showOne(request, response){
    const { id } = request.params;

    return response.json(await Product.findById(id));

  },

  async addProduct(request, response){
    const { title, description } = request.body;

    const product = {
      title,
      description
    }

    await Product.create(product);

    return response.json(product);
  },

  async update(request, response){
    try{
    const {title, description} = request.body;
    const {id} = request.params;

    const productOnDB = Product.findById(id);

    if(!productOnDB){
      throw new Error;
    }

    const product = {
      title,
      description
    }

    await Product.findByIdAndUpdate(id, product);

    return response.json({product});
  }
    catch(err){
      return response.json({"alert": "Produto não encontrado!"});
    }


  },

  async deleteOne(request, response){
    try{
    const {id} = request.params;

    const productOnDB = await Product.findById(id);

    if(productOnDB === null){
      throw new Error;
    }


    const product = await Product.findById(id);

    await Product.findByIdAndDelete(id);

    return response.json({"alert": "Removed", product} );
    }
    catch(err){
      return response.json({"alert": "Produto não encontrado!"})
    }
  },

  async deleteAll(request,response){
    await Product.remove();

    return response.json({"alert": "Todos os produtos foram deletados."});
  }





  
}