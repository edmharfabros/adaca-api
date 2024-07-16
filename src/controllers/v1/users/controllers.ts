import { NextFunction, Request, Response } from 'express'
import {
  UserResponse,
  CreateUserRequest,
  ListUserRequest,
  ListUserResponse,
  UpdateUserRequest,
} from './schema'
import { NotFoundError } from '../../../utils/errors/NotFoundError'
import { hasErrors } from '../../../utils/hasError'
import { createUser } from '../../../services/user/createUser'
import { destroyUser } from '../../../services/user/destroyUser'
import { findUser } from '../../../services/user/findUser'
import { listUser } from '../../../services/user/listUser'
import { updateUser } from '../../../services/user/updateUser'

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const input = req.query
    const params = await ListUserRequest.parseAsync(input)

    const result = await listUser(params)
    if (hasErrors(result)) throw result.errors

    const users = await ListUserResponse.parseAsync(result.data)
    res.json({
      data: users,
      metadata: {
        total: result.totalCount,
        page: params.page,
        size: params.size,
      },
    })
  } catch (error) {
    next(error)
  }
}

export async function read(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await findUser(req.params.id as unknown as number)
    if (!result) {
      throw new NotFoundError('User')
    }

    const user = await UserResponse.parseAsync(result)
    res.json({
      data: user,
    })
  } catch (error) {
    next(error)
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const input = req.body
    const params = await CreateUserRequest.parseAsync(input)
    const result = await createUser(params)

    const user = await UserResponse.parseAsync(result)
    res.status(201).json({
      data: user,
    })
  } catch (error) {
    next(error)
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const input = req.body

    const existingUser = await findUser(req.params.id as unknown as number)
    if (!existingUser) {
      throw new NotFoundError('User')
    }

    const params = await UpdateUserRequest.parseAsync(input)
    const result = await updateUser(existingUser, params)

    const user = await UserResponse.parseAsync(result)
    res.status(200).json({
      data: user,
    })
  } catch (error) {
    next(error)
  }
}

export async function destroy(req: Request, res: Response, next: NextFunction) {
  try {
    const existingUser = await findUser(req.params.id as unknown as number)
    if (!existingUser) {
      throw new NotFoundError('User')
    }

    await destroyUser(existingUser.id)

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
