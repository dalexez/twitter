const UserService = require('./../../app/services/UserService')

class UserView {
    static createUser(payload){
        if (payload == null) {
            return {error: "payload no existe"}
        }
        else if(typeof payload.username !== 'string' || typeof payload.name !== 'string' || typeof payload.id !== 'number'){
            return {error: "necesitan tener un valor valido"}
        }
        return {error: "Todo bien"}
    }
}

module.exports = UserView


// else if((typeof payload.username !== 'string' || payload.username == null) || (typeof payload.name !== 'string' || payload.name == null) || (typeof payload.id !== 'number' || payload.id == null)){
//     return {error: "necesitan tener todos los valores"}