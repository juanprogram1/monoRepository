import express, { Express, Request, Response } from "express";
import { router } from "./routes/index.routes.js";

const app = express();
const port = 3000;

//Routes basic to test the server

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to the server");
});
app.use("/api", router);

app.listen(port, () => {
  console.log("Server is running on port http://localhost:3000");
});
