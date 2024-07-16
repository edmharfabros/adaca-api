import { Equal } from 'typeorm'
import { User } from '../../../src/models/User'
import { findUser } from '../../../src/services/user/findUser'

jest.mock('../../../src/models/User')

describe('findUser', () => {
  describe('when adding users successfully', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      age: 12,
    }

    let result: User | null
    beforeAll(async () => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      ;(User.findOne as jest.Mock).mockResolvedValueOnce(user)

      result = await findUser(user.id)
    })

    it('finds the user', () => {
      expect(User.findOne).toHaveBeenCalledWith({
        where: {
          id: Equal(user.id),
        },
      })
    })

    it('returns the user', () => {
      expect(result).toStrictEqual(user)
    })
  })
})
