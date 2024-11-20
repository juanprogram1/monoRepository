import { Request, Response } from "express";
import { config } from "dotenv";

config();

//conection to database
import { connection } from "../config.db.js";

// get users
const getUsers = (request: Request, response: Response) => {
  connection.query("SELECT * FROM users", (err: Error, result: Response) => {
    if (err) throw err;
    response.status(200).json(result);
  });
};

// add user
const addUser = (request: Request, response: Response) => {
  const { id, name }: { id: Number; name: String } = request.body;

  connection.query(
    "INSERT INTO users (id, name) VALUES (?, ?)",
    [id, name],
    (error, results) => {
      if (error) {
        console.error("Error create user: ", error);
        response.status(500).json({ error: "Error create user" });
        return;
      }
      response.status(201).json({
        mensaje: "User created correctly",
        id: results.insertId,
      });
    }
  );
};

// update user
const updateUser = (request: Request, response: Response) => {
  const { id, name }: { id: Number; name: String } = request.body;

  connection.query(
    "UPDATE users SET name = ? WHERE id = ?",
    [name, id],
    (error, results) => {
      if (error) {
        console.error("Error update user: ", error);
        response.status(500).json({ error: "Error user unknown" });
        return;
      }
      response.status(200).json({
        mensaje: "User updated correctly",
      });
    }
  );
};

// delete user
const deleteUser = (request: Request, response: Response) => {
  const { id }: { id: Number } = request.body;

  if (id) {
    connection.query(
      "DELETE FROM users WHERE id = ?",
      [id],
      (error, results) => {
        if (error) {
          console.error("Error delete user: ", error);
          response.status(500).json({ error: "Error delete user" });
          return;
        }
        response.status(200).json({
          mensaje: "User deleted correctly",
        });
      }
    );
  }
};

export { getUsers, addUser, updateUser, deleteUser };
