const express = require('express')

//import the method i created in controllers/post.controller.js so i can access to  index methods
const postsController = require('../controllers/post.controller')

//Acces to route in express objext 
const router = express.Router()

//first argument URL segement access in that particular route  '/'
//2nd acces to the method we created into the function index in the controllers/post.controller.js
router.post("/", postsController.save)
router.get("/", postsController.index)
router.get("/:id", postsController.show)
router.patch("/:id", postsController.update)
router.delete("/:id", postsController.destroy)





module.exports = router