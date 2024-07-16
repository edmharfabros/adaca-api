import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

export function errorHandler(
  err: Error & { status?: number },
  req: Request,
  res: Response,
  _: NextFunction,
) {
  if (err instanceof ZodError) {
    return res.status(400).json({ error: JSON.parse(err.message) })
  }

  res.status(err?.status || 500).send({ err: err.message })
}
