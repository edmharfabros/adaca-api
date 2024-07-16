import { User } from '../../../src/models/User'
import { updateUser } from '../../../src/services/user/updateUser'

jest.mock('../../../src/models/User')

describe('updateUser', () => {
  describe('when adding users successfully', () => {
    const user = {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      age: 12,
      save: jest.fn(),
    }

    let result: User | null
    beforeAll(async () => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      ;(User.merge as jest.Mock).mockReturnValueOnce(user)
      ;(user.save as jest.Mock).mockResolvedValueOnce(user)

      result = await updateUser(user as unknown as User, { age: 12 })
    })

    it('merges the user payload and the user object', () => {
      expect(User.merge).toHaveBeenCalledWith(user, {
        age: 12,
      })
    })

    it('saves the user', () => {
      expect(user.save).toHaveBeenCalledWith({ reload: true })
    })

    it('returns the updated user', () => {
      expect(result).toStrictEqual(user)
    })
  })
})
