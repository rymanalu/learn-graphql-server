const express = require('express')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./schema/schema')

const app = express()

// Connect to mLab database
mongoose.connect('mongodb://roni:tes123@ds113815.mlab.com:13815/gqlroni', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHttp({ schema, graphiql: true }))

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
