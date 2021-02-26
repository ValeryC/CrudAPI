const express = require('express')

//Create an instance of express in an object. we can access all the http methods(get post patch..)
const app = express()

//use get method first argument is the url, the second argument is a callback function
//Callback need to be call when the user send a request to a Particular url
app.get('/', (req, res) => {
  // response to the user
  res.send("hello World")
})

app.get('/blog', (req, res) => {
  // response to the user
  res.send("hello Blog")
})

module.exports = app