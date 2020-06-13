const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27020/katiarosaDB', {useNewUrlParser: true, useUnifiedTopology: true });
require('./models/Product');

app.use('/api', require('./routes/routes'));


app.listen(3005, () => {
  console.log('Server has started');
})