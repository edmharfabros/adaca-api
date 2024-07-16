import { CreateUserRequest } from '../../controllers/v1/users/schema'
import { User } from '../../models/User'

export async function createUser(params: CreateUserRequest) {
  const user = User.create(params as User)
  return user.save({ reload: true })
}
