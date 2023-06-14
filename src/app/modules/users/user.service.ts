import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generarateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto incremental generated id
  const id = await generarateUserId()

  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
