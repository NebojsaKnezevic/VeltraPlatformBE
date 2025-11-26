import { Request, Response, NextFunction } from "express";

export const asyncHandler =
  (fn: any) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);


  export function asyncHandler2(fn: any) {
  return async function (req: Request, res: Response, next: NextFunction) {
    return Promise.resolve(fn(req, res, next)).catch(next);
    // try {
    //   const fnResult = await fn(req, res, next);
    //   return fnResult;
    // } catch (err) {
    //   next(err);
    // }
  };
}

