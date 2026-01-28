export enum Role {
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE",
}

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  role: Role
  isActive: boolean
  createdAt: string
  updatedAt: string
}
