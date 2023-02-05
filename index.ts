//external import
import cors from "cors";
import express from "express";

//internal import
import DbConnect from "./src/util/db";
import apiRoutes from "./src/routes";

//middleware
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

// mongoDB connection, just pass the mongo url
new DbConnect(process.env.mongoURL);
app.use("/api", apiRoutes);

// default error handlers
const errorHandlers = (err: any, req: any, res: any, next: any) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
};

app.use(errorHandlers);

//routes
app.get("/", (req: any, res: any)=> {
    res.send("Hello world!!")
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`)
})