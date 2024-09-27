import { createUser, findUserByEmail } from "../repositories/user.repository"

interface CreateUserDTO{
    name: string
    email: string
    password: string
}

export const createUserService = async (data: CreateUserDTO) => {
    const user = await findUserByEmail(data.email)
    if(user) throw new Error('E-mail ja foi cadastrado!')
    return await createUser(data)
}