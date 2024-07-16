export class NotFoundError extends Error {
  status

  constructor(entity = 'Entity') {
    super(`${entity} not found`)
    this.status = 404
  }
}
