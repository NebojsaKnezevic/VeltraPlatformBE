import http from "http";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import { myRouter } from "./routes/index";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", myRouter);

// app.get("/", async (req: Request, res: Response) => {
//   const result = await GetWD();
//   res.json(result);
// });

const server = http.createServer(app);
server.listen(7778, () => {
  console.log("server running on http://localhost:7778/");
});
