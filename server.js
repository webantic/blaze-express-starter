const express = require('express')
const path = require('path')

const app = express()

app.use(require('prerender-node'))
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
