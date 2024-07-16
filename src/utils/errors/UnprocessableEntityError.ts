export class UnprocessableEntityError extends Error {
  errors

  constructor(errors: Record<string, unknown>[]) {
    super()
    this.errors = errors
  }
}
