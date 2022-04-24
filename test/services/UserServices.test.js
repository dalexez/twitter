const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserServices", () => {
        const user = UserService.create(1, "dalexez", "Daniel")
        expect(user.username).toBe("dalexez")
        expect(user.name).toBe("Daniel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined("dalexez")
    })
})