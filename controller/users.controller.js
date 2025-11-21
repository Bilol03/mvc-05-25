const {readFile, writeFile} = require('../utils/fs.js')

const getUser = (req, res) => {
    let users = readFile('./users.json')
    res.json(users)
}

const postUser = (req, res) => {
    
}

module.exports = {
    getUser,
    postUser
}