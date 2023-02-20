const express = require('express')

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res)=>{
    console.log('in the middleware')
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body></html>')
    res.send('<h1> Add product page!!</h1>')
    
})
app.use('/product',(req,res,next)=>{
    console.log(req.body)
    
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log('in another middleware')
    res.send('<h1> Welcome To Express!!</h1>')
})

app.listen(4000)
