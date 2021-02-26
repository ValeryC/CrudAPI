const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

// function to create user
function signUp(req, res) {
  models.User.findOne({ where: { email: req.body.email } }.then(result => {
    if (result) {
      res.status(409).json({
        message: "User already exist!"
      })
    } else {
      // function to generate a salt
      bcryptjs.genSalt(10, function (err, salt) {
        // method of bcrypt hash need to provide plain text password, second argument provide salt that generate a random string
        // salt add random string at the end of your password. cannot be found by a dictionary table
        // last argument = a callback function
        bcryptjs.hash(req.body.password, salt, function (err, hash) {
          const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash
          }

          models.User.create(user).then(result => {
            res.status(201).json({
              message: "User created successfully"
            })
          }).catch(error => {
            res.status(500).json({
              message: "Something went wrong! cannot create user",
            })
          })
        })
      })


    }
  }).catch(error => {

  }))
}

module.exports = {
  signUp: signUp
}