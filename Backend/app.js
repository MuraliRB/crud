const express = require('express');
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/bookroutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/books', router);

mongoose
  .connect(
    'mongodb+srv://murali:idontknow@cluster0.df1qs.mongodb.net/crud?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected Database Successfully'))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
