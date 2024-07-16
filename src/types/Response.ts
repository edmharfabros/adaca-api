export type SuccessListResponse<T> = {
  data: T
  totalCount: number
}

export type ErrorResponse<T = Error> = {
  errors: T[]
}

export type ListResponse<T, E = Error> =
  | SuccessListResponse<T>
  | ErrorResponse<E>
