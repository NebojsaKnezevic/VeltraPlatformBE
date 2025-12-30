import http from "http";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import { myRouter } from "./routes/index";
import { errorHandler } from "./middleware/error-handler";
import { messageCollector } from "./middleware/message-collector";
import { responseWrapper } from "./middleware/response-wrapper";
import { getHrgtDWRepo } from "./repository/employees-repository";
import { IFilter } from "./models/filter-model";
// import { getConcurRepo } from "repository/employees-repository";

const app = express();

app.use(cors({ origin: "http://localhost:5175", credentials: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(messageCollector);
app.use(responseWrapper);
app.use("/", myRouter);
app.use(errorHandler);
// app.get("/", async (req: Request, res: Response) => {
//   const result = await GetWD();
//   res.json(result);
// });

app.get("/test/api", async (req: Request, res: Response) => {
  // const page = parseInt(req.query.page as string) || 1;
  // const limit = parseInt(req.query.limit as string) || 10;
  // const orderby = (req.query.orderby as string) || "GEID";
   const q = req.query;
   const filter: IFilter = {
    geid: q.geid as string,
    firstName: q.firstName as string,
    lastName: q.lastName as string,
    email: q.email as string,
    country: q.country as string,
    payroll: q.payroll as string,
  };

  const result = await getHrgtDWRepo(filter);
  res.status(200).json(result);
});

const server = http.createServer(app);
server.listen(7778, () => {
  console.log("server running on http://localhost:7778/");
});
