const users = require("../data/index")


const getUsers = (req, res, next) => {
    //if(!users){
      //  throw new Error("Not supplied Users!")
    //}
    res.send(users)
}

const getUsersById = (req, res, next ) => {
    let id = parseInt(req.params.id)
    let user = users.find((user) => user.id === id)

    //if(!users.params.id){
      //  throw new Error("Need Users Id!")
    //}
    res.send(user)
}

const create = (req, res, next ) => {
    let messagePayload = req.body
    messagePayload.id = users.length + 1
    users.push(messagePayload)
    res.send(users)
}

const updateUser = (req, res, next ) => {
    let messagePayload = req.body
    let user = users.find((user) => user.id == id)
    Object.keys(messagePayload).map((key) => {
        user[key] = payload[key];
      });
      messagePayload.id = users[id].id - 1
      res.send(users)
}

const removeUser = (req, res, next) => {
    let id = parseInt(res.params.id)
    let user = users.find((user) => user.id == id)
    users.splice(user, 1)
}

module.exports = {getUsers, getUsersById, create, updateUser, removeUser}