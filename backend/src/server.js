const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

const routes = require('./routes')
const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', routes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server start at port ${PORT}`)
})