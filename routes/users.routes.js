const express = require('express')
const {getUser, postUser, getUserById, updateUser} = require("../controller/users.controller.js")
const route = express.Router()

route.get('/users', getUser)
route.get('/users/:id', getUserById)
route.post('/users', postUser)
route.put('/users/:id', updateUser)


module.exports = route