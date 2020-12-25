const express = require('express')
const app = express()
const {join} = require('path')
require('dotenv').config()

require('./db')


app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',require('./routes/short.routes'))



app.listen(process.env.PORT || 4000,()=>{
    console.log('The server is running')
})