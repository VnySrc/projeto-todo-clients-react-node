import dotenv from "dotenv"
import {UserFunctions} from "../services/UserService.js"

dotenv.config()

export const userRegister = async (req,res) => {
    const {email, password, priority} = req.body;
    if ( email && password && priority) {
        const newUser = await UserFunctions.userCreate(email, password, priority)
        if (newUser instanceof Error) {
            res.json({error: newUser.message})
        }
        else{
            res.json(newUser)
        }
    }
    else {
        res.json({error: "Parametros passados incorretamente"})
    }
      
}

export const userLogin = async (req, res) => {
    const {email, password} = req.body;
    if (email && password) {
        const findUser = await UserFunctions.UserFindLogin(email, password)
        if ( findUser instanceof Error ) {
            res.json({error: findUser.message})
        }
        else {
            res.json(findUser)
        }
    }
    else {
        res.json({status: "paramatros passados incorretamente"})
    }
   
        
    }
   
