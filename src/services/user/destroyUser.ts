import { User } from '../../models/User'

export async function destroyUser(id: number) {
  return User.delete(id)
}
