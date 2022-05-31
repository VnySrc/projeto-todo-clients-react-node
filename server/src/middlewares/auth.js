import {User} from "../models/User.js"
import passport from "passport"
import {Strategy as StrategyJWT, ExtractJwt} from "passport-jwt"

const JWTAcessDenined = {
    status: "acesso negado"
}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET_KEY, 
}

passport.use(new StrategyJWT(options, async (payload, done) => {
    const user = await User.findOne({where:{email: payload.email}})
    if (payload.priority == "s-adm") {
        if (user) {
            return done(null, user)
         }
         else{
            return done(JWTAcessDenined, false)
         }
    }
    else  {
        return done(JWTAcessDenined, false)
    }
    
}))



export const privateRoute = async (req, res, next) => {
   const authFunction = passport.authenticate("jwt", (err, user) => {
        if (user) {
            next()
        }
        else{
            res.status(401)
            res.json(JWTAcessDenined)
        }
    })
    authFunction(req, res, next)
}

export default passport;