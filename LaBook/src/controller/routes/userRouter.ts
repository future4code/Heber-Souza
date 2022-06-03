import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserFirestoreDatabase } from "../../data/firestore/UserFirestoreDatabase";
import { UserDatabase } from "../../data/mySQL/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router()
// implementa o banco de dados do MySQL
// const userDatabase = new UserDatabase()

// implementa o banco de dados do firestore
const userDatabase = new UserFirestoreDatabase()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post('/create',(req, res)=> userController.createUser(req, res))

