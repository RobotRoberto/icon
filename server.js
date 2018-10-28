const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const getProductMatch = require('./utils/getProductMatch')

app.use(bodyParser.json())

app.post('/searchForProduct', (req, res) => {
    let image = req.body
    const results = getProductMatch(image)

    res.send(results);
})

app.listen(3000, () => {
    console.log('Running on port 3000')
})