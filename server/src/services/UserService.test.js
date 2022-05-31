import { User } from "../models/User"
import {UserFunctions} from "./UserService"

const email = "vinyciusmarcos4@gmail.com"
const passwrod = "171717"

describe ("teste do user service", () => {
    beforeAll(async () => {
        await User.sync({force: true})
    })
    it("registrar um usuario / retornar token JWT", async () => {
     const newUser = await UserFunctions.userCreate(email,passwrod)   
     expect(newUser).not.toBeInstanceOf(Error)
     expect(newUser).toHaveProperty("token")
    })
    it("logar um usuario / retornar token JWT", async () => {
        const loggedUser = await UserFunctions.UserFindLogin(email, passwrod)
        expect(loggedUser).toHaveProperty("token")
    }) 
})