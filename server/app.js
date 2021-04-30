const express = require('express')
const mongoose = require('mongoose')


const authRouter = require('./routes/auth')
const gameRouter = require('./routes/game')
const cardRouter = require('./routes/card')

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

app.use('/auth', authRouter)
app.use('/game', gameRouter)
app.use('/card', cardRouter)

module.exports = app
