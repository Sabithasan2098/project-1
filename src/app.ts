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

// create a users router use express.router--------------------->
const userRouter = express.Router();
app.use("/api/v1/users", userRouter);
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user create successfully",
    data: user,
  });
});
// ----------------------------------//
// create a course router use express.router-------->
const courseRouter = express.Router();
app.use("/api/v1/course", courseRouter);
courseRouter.post("/createCourse", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course create successfully",
    data: course,
  });
});
// --------------------------------------------//

// simple get and post request------------------->
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello developers from the world!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json("Post data successfully!");
});
// --------------------------------//
export default app;
