import { Equal } from 'typeorm'
import { User } from '../../models/User'

export async function findUser(id: number) {
  return User.findOne({
    where: {
      id: Equal(id),
    },
  })
}
