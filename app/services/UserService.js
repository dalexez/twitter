const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }
    static updateUserUsername(user, newUsername){
        //return user.username = newUsername
        user.username = newUsername //Porque funciona igual sin el return
    }
    static getAllUsernames(objectList){
        return objectList.map(user => user.username)
    }
}

module.exports = UserService