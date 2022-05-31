import dotenv from "dotenv"

dotenv.config()

export let db = {
    db: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    pasword: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
}
if (process.env.NODE_ENV === "test") {
     db = {
        db: process.env.MYSQL_TEST_DB,
        user: process.env.MYSQL_TEST_USER,
        pasword: process.env.MYSQL_TEST_PASSWORD,
        port: process.env.MYSQL_TEST_PORT,
    }
}
