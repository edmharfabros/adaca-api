import { Router } from 'express'

import health from './health/routes'
import user from './v1/users/routes'

const router = Router()

router.use('/health', health)
router.use('/v1/users', user)

export default router
