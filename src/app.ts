import express, { NextFunction, Request, Response } from "express";
const app = express();
// json data perser
app.use(express.json());
// text data perser
app.use(express.text());

// make a middleware-------------------->
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};
// --------------------//

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello developers from the world!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json("Post data successfully!");
});

export default app;
