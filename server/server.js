const express = require ('express')
const cors = require("cors")
const app = express()
const {getHomePage, getCSS} = require(`./controller/controller`)




app.use(cors())
app.use(express.json())
app.use(express.static('client'))



app.get('/', getHomePage)
app.get('/css', getCSS)



app.listen(4000,console.log('server running on 4000'))