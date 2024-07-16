import { ErrorResponse, ListResponse } from '../types/Response'

export function hasErrors<T, E = Error>(
  response: ListResponse<T, E>,
): response is ErrorResponse<E> {
  return 'errors' in response && response.errors.length > 0
}
