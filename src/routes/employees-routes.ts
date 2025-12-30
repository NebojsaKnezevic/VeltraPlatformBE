import { asyncHandler } from "../helpers/async-handler";
import {
  getConcurController,
  getHRGTController,
  getHrgtDwController,
} from "../controllers/employees-controller";
import { Router } from "express";
import { jwtAuth } from "../middleware/authentication";
import { jwtRole } from "../middleware/authorization";
import { audit } from "../middleware/audit";

export default function workdayRouter(router: Router) {
  router.get(
    "/workday",
    jwtAuth,
    asyncHandler(audit),
    jwtRole(["user", "admin"]),
    asyncHandler(getHRGTController)
  );

  router.get(
    "/concur",
    jwtAuth,
    asyncHandler(audit),
    jwtRole(["user", "admin"]),
    asyncHandler(getConcurController)
  );

  router.get(
    "/hrgtdw",
    jwtAuth,
    asyncHandler(audit),
    jwtRole(["user", "admin"]),
    asyncHandler(getHrgtDwController)
  );
}

