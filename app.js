const express = require('express')
// allow to pass json bodies and get data from requests
const bodyParser = require('body-parser')

//Create an instance of express in an object. we can access all the http methods(get post patch..)
const app = express()

//import the route we defined on routes/posts.js
const postsRoute = require('./routes/posts')

// 
const userRoute = require('./routes/user')
// we can passe json bodies and get the data from request
app.use(bodyParser.json())
// in app object we can use a method name use()
// with that method we can run anything as a middleware for incoming requests
app.use("/posts", postsRoute)

app.use("/user", userRoute)

module.exports = app