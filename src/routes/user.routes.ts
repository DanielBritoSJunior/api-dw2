import { Router } from "express"
import { createUser, deleteUser, findAllUsers, updateUser } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"
import { findUserByIdWithTasks } from "../repositories/user.repository"

const router = Router()

router.post('/', validate(CreateUserDTO), createUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser)
router.patch('/:id', validate(UpdateUserDTO), updateUser)
router.get('/:id/tasks', findUserByIdWithTasks)

export default router