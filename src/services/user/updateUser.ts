import { UpdateUserRequest } from '../../controllers/v1/users/schema'
import { User } from '../../models/User'

export async function updateUser(user: User, params: UpdateUserRequest) {
  const updatedUser = User.merge(user, params as User)

  return updatedUser.save({ reload: true })
}
