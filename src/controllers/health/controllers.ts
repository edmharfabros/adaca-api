import { NextFunction, Request, Response } from 'express'

export async function health(req: Request, res: Response, next: NextFunction) {
  try {
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}
