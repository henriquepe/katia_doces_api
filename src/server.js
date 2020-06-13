const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({"message": "Hello mother fucker"});
})

mongoose.connect('mongodb://localhost:27020/katiarosaDB', {useNewUrlParser: true, useUnifiedTopology: true });
require('./models/Product');

app.use('/api', require('./routes/routes'));


app.listen(3005, () => {
  console.log('Server has started');
})