const express = require('express')
const {getUser, postUser} = require("../controller/users.controller.js")
const route = express.Router()

route.get('/users', getUser)
route.post('/users', postUser)


module.exports = route