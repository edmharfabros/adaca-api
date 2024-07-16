import { Router } from 'express'
import { create, destroy, list, read, update } from './controllers'

const router = Router()

router.get('/', list)
router.get('/:id', read)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

export default router
