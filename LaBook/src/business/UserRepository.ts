import { user } from "../model/user"

export interface UserRepository {
    insertUser(user: user): Promise<void>,
    deleteUser(id:string): Promise<void>

}