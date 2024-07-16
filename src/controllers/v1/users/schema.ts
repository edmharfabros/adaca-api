import { z } from 'zod'

export const UserResponse = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  age: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
})

export type UserResponse = z.infer<typeof UserResponse>

export const ListUserRequest = z.object({
  page: z.coerce.number().optional().default(1),
  size: z.coerce.number().optional().default(10),
})
export type ListUserRequest = z.infer<typeof ListUserRequest>

export const ListUserResponse = z.array(UserResponse)
export type ListUserResponse = z.infer<typeof ListUserResponse>

export const CreateUserRequest = UserResponse.omit({
  created_at: true,
  updated_at: true,
  id: true,
})
export type CreateUserRequest = z.infer<typeof CreateUserRequest>

export const UpdateUserRequest = UserResponse.omit({
  created_at: true,
  updated_at: true,
  id: true,
}).partial()
export type UpdateUserRequest = z.infer<typeof UpdateUserRequest>
