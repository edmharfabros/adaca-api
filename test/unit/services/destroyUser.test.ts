import { User } from '../../../src/models/User'
import { destroyUser } from '../../../src/services/user/destroyUser'

jest.mock('../../../src/models/User')

describe('destroyUser', () => {
  describe('when adding users successfully', () => {
    beforeAll(async () => {
      jest.clearAllMocks()
      jest.resetAllMocks()
      ;(User.delete as jest.Mock).mockReturnThis()

      await destroyUser(1)
    })

    it('deletes the user', () => {
      expect(User.delete).toHaveBeenCalledWith(1)
    })
  })
})
