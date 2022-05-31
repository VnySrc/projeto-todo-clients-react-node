import {Sequelize} from "sequelize";
import dotenv from "dotenv";
import {db} from "./database.js"

dotenv.config()

export const sequelize = new Sequelize(
    db.db,
    db.user,
    db.pasword,
    {
        dialect: "mysql",
        host: "localhost",
        port: parseInt(db.port),
    }
)