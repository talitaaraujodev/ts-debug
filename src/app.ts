import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  debugger
  res.json({ message: "Hello World!" });
});

app.listen(8000);
