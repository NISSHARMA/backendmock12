const bcrypt = require("bcrypt")
const { UserModel } = require("../Model/userModel")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const userSignup = (req, res) => {
    const { email, password } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            const newUser = await new UserModel({ email, password: hash })
            newUser.save()
            res.status(200).send({ "msg": "User has been registered" })
        })
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successfull", "token": jwt.sign({ "userID": user._id }, process.env.Secret) })
                } else {
                    res.status(400).send({ "msg": "Wrong Credential" })
                }
            })
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message })
    }
}

module.exports = {
    userSignup,
    userLogin
}