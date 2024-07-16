import 'reflect-metadata'
import cors from 'cors'
import express from 'express'

import routes from './controllers/routes'
import { errorHandler } from './middlewares/errorHandler'
import { AppDataSource } from './utils/getDataSource'

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.use(errorHandler)

app.listen(port, async () => {
  await AppDataSource.initialize()
  console.log(`[Server] running on port ${port}`)
})
