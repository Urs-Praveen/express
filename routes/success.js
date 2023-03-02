const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')

router.get('/success', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'))
})

module.exports = router