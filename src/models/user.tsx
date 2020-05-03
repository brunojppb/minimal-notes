export interface User {
  id: number,
  email: string
  firstName: string
  lastName: string
}

export interface UserLogin {
  token: string
  user: User
}