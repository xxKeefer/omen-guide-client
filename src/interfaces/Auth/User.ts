export default interface UserInterface {
  name: string | null
  email: string | null
  role: string
}

export interface AuthInterface {
  username: string
  email: string
  password: string
}
export interface Identifier {
  identifier: string
  password: string
}
