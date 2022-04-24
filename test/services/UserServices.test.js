const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserServices", () => {
        const user = UserService.create(1, "dalexez", "Daniel")
        expect(user.username).toBe("dalexez")
        expect(user.name).toBe("Daniel")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"dalexez","Daniel")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("dalexez")
        expect(userInfoInList[2]).toBe("Daniel")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1, "dalexez", "Daniel")
        UserService.updateUserUsername(user, "dalex")
        expect(user.username).toBe("dalex")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "dalexez1", "Daniel")
        const user2 = UserService.create(1, "dalexez2", "Daniel")
        const user3 = UserService.create(1, "dalexez3", "Daniel")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("dalexez1")
        expect(usernames).toContain("dalexez2")
        expect(usernames).toContain("dalexez3")
    })
})