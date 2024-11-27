require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express()

//Home Rout
app.get('/', (req,res)=>{
  res.render('index.ejs')
})

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=>{
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})



app.use(express.urlencoded({extended:false}))

app.use(methodOverride('_method'))

//Require Controllers
const desertCtrl = require('./controllers/deserts')

app.use('/', desertCtrl)

app.listen(3000,()=>{
  console.log(`App id listening on port 3000`)
})

