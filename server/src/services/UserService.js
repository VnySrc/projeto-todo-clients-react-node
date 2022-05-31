import { User } from "../models/User.js";
import JWT from "jsonwebtoken"
import bcrypt from "bcrypt"

export const UserFunctions = {
    userCreate: async (email, password, priority) => {
    if (email && password) {
        try {
            const hasUser = await User.findOne({where:{email: email}})
            if (!hasUser) {
           const newUser = User.build({
                email,
                password,
                priority,
             })
            const hash = bcrypt.hashSync(password, 10)
            newUser.password = hash
            
            await newUser.save()
            const token = JWT.sign({email, password, priority}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"})
            return {status:"Usuario registrado com sucesso", token:`Bearer ${token}`}
        } 
        else {
            return new Error("Email já cadastrado!")
        }        
        }
        catch(err) {
            return new Error("Parametros passados incorretamente")
        }
         
    }else{
        return new Error("Parametros passados incorretamente")
    }
        
    },
    UserFindLogin : async (email, password) => {
        if (email && password) {
            const user = await User.findOne({where:{email: email}})
            try {
                if (UserFunctions.verifyHash(password, user.password)) {
                    const token = JWT.sign({email, password, priority:user.getDataValue("priority")}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"})
                    return {token:`Bearer ${token}`}
                }
                else {return {status: "Senha invalida"}}
            }
            catch (err) {
                return (
                    new Error("E-mail ou senha incorreto")
                   )
            }
        }
        else{
           return (
            new Error("Parametros passados incorretamente")
           )
            
        }
    },
    verifyHash: (password, hash) => {
       return bcrypt.compareSync(password, hash)
    }
}

    



