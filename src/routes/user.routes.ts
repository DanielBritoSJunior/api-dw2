import { Router } from "express"
import { createUser, findAllUsers, deleteUser, updateUser } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"

const router = Router()

router.post('/',validate(CreateUserDTO), createUser) //add
router.get('/', findAllUsers) //lista
router.delete('/:id', deleteUser) //delete
router.patch('/:id', validate(UpdateUserDTO), updateUser) //update

export default router