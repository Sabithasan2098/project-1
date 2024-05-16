import express, { Request, Response } from "express";
const app = express();
// json data perser
app.use(express.json());
// text data perser
app.use(express.text());

app.get("/", (req:Request, res:Response) => {
  res.send("Hello developers from the world!");
});


app.post("/", (req:Request, res:Response) => {
  console.log(req.body);
  res.json("Post data successfully!");
})

export default app;
