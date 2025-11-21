// MVC --> Model View Controller
const express = require('express')
const userRoute = require('./routes/users.routes.js')

const app = express()
app.use(express.json())

app.use(userRoute)

app.listen(3000, () => console.log("This server is running on http://localhost:3000"))