const User = require('./../.../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object', () =>{
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, carlogilmar, "Carlos", "Bio", "dateCreated", "lastUpdate")

        //Aqui validas los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el de la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dataCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    })
})