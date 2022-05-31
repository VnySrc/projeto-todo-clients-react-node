import { sequelize } from "../instances/mysql.js";
import Sequelize from "sequelize"


export const User = sequelize.define("User",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING
    },
    priority: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "normal",
    }
},
    {
        tableName: "users",
        timestamps: false,
    }
)

