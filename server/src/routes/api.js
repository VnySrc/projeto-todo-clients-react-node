import { Router } from "express";
import * as productController from "../controllers/clientController.js"
import * as userController from "../controllers/userController.js"
import { privateRoute } from "../middlewares/auth.js"
const router = Router()

//Public Routes

//User Routes
router.post("/users/register", userController.userRegister)
router.post("/users/login", userController.userLogin)


//Product Routes

router.get("/clients", productController.clientFindAll)
router.use(privateRoute)
router.post("/clients", productController.clientAdd)
router.put("/clients/:id",  productController.clientEdit)
router.delete("/clients/:id", productController.clientDelete)





export default router;