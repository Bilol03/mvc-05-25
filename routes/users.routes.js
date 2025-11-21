const express = require('express')
const {getUser, postUser, getUserById} = require("../controller/users.controller.js")
const route = express.Router()

route.get('/users', getUser)
route.get('/users/:id', getUserById)
route.post('/users', postUser)


module.exports = route