import { Router } from "express"
import { createUser, findAllUsers, deleteUser, updateUser } from "../controllers/user.controller"

const router = Router()

router.post('/',createUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router