import { asyncHandler } from "../helpers/async-handler";
import {
  getConcurController,
  getWorkdayController,
} from "../controllers/employees-controller";
import { Router } from "express";
import { jwtAuth } from "../middleware/authentication";
import { jwtRole } from "../middleware/authorization";
import { audit } from "../middleware/audit";

export default function workdayRouter(router: Router) {
  router.get("/workday", jwtAuth, asyncHandler(audit), jwtRole(["user", "admin"]), asyncHandler(getWorkdayController));
  router.get("/concur", jwtAuth, asyncHandler(audit), jwtRole(["user", "admin"]), asyncHandler(getConcurController));
}
