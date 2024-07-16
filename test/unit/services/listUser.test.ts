import { User } from '../../../src/models/User'
import { listUser } from '../../../src/services/user/listUser'
import { ListResponse } from '../../../src/types/Response'

jest.mock('../../../src/models/User')

describe('listUser', () => {
  describe('when adding users successfully', () => {
    let result: ListResponse<User[]>
    beforeAll(async () => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      ;(User.findAndCount as jest.Mock).mockResolvedValueOnce([[], 0])

      result = await listUser({ page: 1, size: 10 })
    })

    it('list all the users', () => {
      expect(User.findAndCount).toHaveBeenCalledWith({ skip: 0, take: 10 })
    })

    it('returns all users', () => {
      expect(result).toStrictEqual({ data: [], totalCount: 0 })
    })
  })
})
