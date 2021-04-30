const express = require('express')
const mongoose = require('mongoose')

const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(3001, () => {
  mongoose.connect('mongodb://localhost:27017/MyGame', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  console.log('connecting')
})



module.exports = app
