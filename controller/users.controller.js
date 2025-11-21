const { readFile, writeFile } = require('../utils/fs.js')
let users = readFile('./users.json')

const getUser = (req, res) => {
	res.json(users)
}

const postUser = (req, res) => {
	let user = req.body
	if (!(user.name && user.password && user.phone))
		return res.json({
			message: "Ma'lumot kiritish majburiy",
	})
    user.id = users[users.length - 1].id + 1
    users.push(user)
    writeFile('./users.json', users)

    res.json({
        message: "Successfully created",
        users
    })

}

const getUserById = (req, res) => {
    let id = +req.params.id
    const user = users.find(el => el.id == id)
    console.log(user)
    if (!user) return res.json({
        status: 404,
        message: "User not found"
    })

    res.json({
        status: 200,
        message: "Success",
        user
    })
}

module.exports = {
	getUser,
	postUser,
    getUserById
}
