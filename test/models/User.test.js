const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object', () =>{
        //Aqui invocas el codigo que vas a usar en tu app
        const user = new User(1, "dalexez", "Daniel", "Bio")

        //Aqui validas los resultados de ese codigo
        //Esta es una comparacion que va a igualar el valor de la izquierda con el de la derecha
        expect(user.id).toBe(1)
        expect(user.username).toBe("dalexez")
        expect(user.name).toBe("Daniel")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined() //Verifica que el valor no sea undefined)
    })
    test('Add getters', () => {
        const user = new User(1, "dalexez", "Daniel", "Bio")
        expect(user.getUsername).toBe("dalexez")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined() 
    })
})