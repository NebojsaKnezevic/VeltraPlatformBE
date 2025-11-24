import { Request, Response, NextFunction } from "express";
import { logger } from "../helpers/logger";

import { ZodTypeAny } from "zod/v3";
import { ValidationError } from "../errors/errors";

export function validateBody(schema: ZodTypeAny) {
  return function (req: Request, res: Response, next: NextFunction) {

    const result = schema.safeParse(req.body);
    if (!result.success) {
      const details = JSON.stringify(result.error.format(), null, 2);
      const err = new ValidationError("validateBody middleware", details)
      return next(err);
    }

    req.body = result.data;

    next();
  };
}
