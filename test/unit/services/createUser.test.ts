import { Equal } from 'typeorm'
import { User } from '../../../src/models/User'
import { createUser } from '../../../src/services/user/createUser'

jest.mock('../../../src/models/User')

describe('createUser', () => {
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
      ;(User.create as jest.Mock).mockReturnValueOnce(user)
      ;(user.save as jest.Mock).mockResolvedValueOnce(user)

      result = await createUser({
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age,
      })
    })

    it('creates the user', () => {
      expect(User.create).toHaveBeenCalledWith({
        first_name: user.first_name,
        last_name: user.last_name,
        age: user.age,
      })
    })

    it('saves the user', () => {
      expect(user.save).toHaveBeenCalledWith({ reload: true })
    })

    it('returns the created user', () => {
      expect(result).toStrictEqual(user)
    })
  })
})
