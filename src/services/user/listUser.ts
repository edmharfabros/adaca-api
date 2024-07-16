import { ListUserRequest } from '../../controllers/v1/users/schema'
import { User } from '../../models/User'
import { ListResponse } from '../../types/Response'

export async function listUser(
  params: ListUserRequest,
): Promise<ListResponse<User[]>> {
  const [users, totalCount] = await User.findAndCount({
    skip: params.page - 1,
    take: params.size,
  })

  return { data: users, totalCount }
}
