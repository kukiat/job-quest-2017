const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server start at port ${PORT}`)
})