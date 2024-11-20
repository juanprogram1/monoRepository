import express, { Express, Request, Response } from "express";
import { users } from "./routes/user.routes";

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  response.send("Home!");
});

app.use("/User", users);

app.listen(port, () => {
  console.log("Server is running on port http://localhost:8080");
});
