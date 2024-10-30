// import express from "express";
import express, { Request, Response } from "express";
// create instance of express
const app = express();
// configure the port to listen
const PORT = 3000;

//Routes basic to test the server
app.get("/", (req: Request, res: Response) => {
  res.send("radio active");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
