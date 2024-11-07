import express, { Request, Response } from "express";
export const router: express.Router = express.Router();

router.get("/route", (req: Request, res: Response) => {
  res.send("Hello world route");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("Hello world about, david");
  console.log("run tsx and nodemon");
});

export default router;
