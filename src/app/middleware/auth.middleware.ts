// import httpStatus from "http-status";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";

import config from "../config";
// import { UserRole } from "@prisma/client";
import { handleAsyncTryCatch } from "../utlis/asyncTryCatch.utlis";
// export type TUserRole = keyof typeof UserRole;
export const auth = () =>
  // ...roles: TUserRole[]
  {
    return handleAsyncTryCatch(
      async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;

        if (!token) {
          throw new Error("Unauthorized Access");
        }
        let decoded;
        try {
          decoded = jwt.verify(token, config.jwt_access_secret as Secret);
        } catch (error) {
          next(error);
        }
        req.user = decoded as JwtPayload;

        //   const { role } = req.user;
        //   if (roles.length && !roles.includes(role)) {
        //     throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorize access");
        //   }
        next();
      }
    );
  };
