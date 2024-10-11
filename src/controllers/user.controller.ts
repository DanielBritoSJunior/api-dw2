import { createUserService, findAllUsersService } from '../services/user.service'
import { Request, Response } from 'express'

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const findAllUsers = async (req: Request, res: Response) => {
    const users = await findAllUsersService()
    return res.status(200).json(users)
}