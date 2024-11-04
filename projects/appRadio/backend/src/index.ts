/* import express, { Request, Response } from "express";
import WebSocket, { WebSocketServer } from "ws";
import http from "http";

const app = express();
const PORT = 3000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server: http.createServer() });

app.use(express.static("public"));

wss.on("connection", (ws) => {
  console.log("Client conect to server websocket");

  ws.on("message", (message) => {
    console.log("received: %s", message.toString());

    ws.send("Hello from the server");

    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message.toString());
      }
    });

    ws.on("close", () => {
      console.log("client disconnected");
    });
  });
});

//Routes basic to test the server
app.get("/", (req: Request, res: Response) => {
  res.send("radio active " + new Date().toLocaleString());
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
 */

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

//Routes basic to test the server

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo");
});

app.get("/radio", (req: Request, res: Response) => {
  res.send("Radio activo");
});

app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
