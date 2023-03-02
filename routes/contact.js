const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
})
router.post('/contact',(req,res)=>{
    res.redirect('/success')
})
module.exports =router