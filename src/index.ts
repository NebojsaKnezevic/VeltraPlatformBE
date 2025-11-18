import http from "http";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import { GetWD } from "./repository/workday";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/:test", async (req: Request, res: Response) => {
  const result = await GetWD();
  res.json(result);
});

const server = http.createServer(app);
server.listen(7777, () => {
  console.log("server running on http://localhost:7777/");
});
