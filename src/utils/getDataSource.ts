import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../models/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!) ?? 5438,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  synchronize: true,
  logging: false,
})
