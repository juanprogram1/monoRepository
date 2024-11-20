import express, { Request, Response } from "express";
import {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const users: express.Router = express.Router();

// User Routes
users.get("/getUsers", getUsers);
users.post("/addUsers", addUser);
users.put("/updateUsers", updateUser);
users.delete("/deleteUsers", deleteUser);

export { users };
