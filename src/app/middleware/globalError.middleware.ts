/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";

export const handleGlobalError: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message = "Opps! something went wrong";

  //if token is incorrect then this if block is going to execute
  if (error instanceof JsonWebTokenError) {
    statusCode = httpStatus.UNAUTHORIZED;
    message = "Unauthorized Access";
  }
  //if token is expired then this if block is going to execute
  else if (error instanceof TokenExpiredError) {
    statusCode = httpStatus.FORBIDDEN;
    message = "Unauthorized Access";
  }

  //
  if (error instanceof PrismaClientInitializationError) {
    if (error.name === "PrismaClientInitializationError") {
      const regex = /error: (.*)\n/;
      const match = error.message.match(regex);
      message = match ? match![1] : message;
    }
  }
  //
  else if (error instanceof PrismaClientValidationError) {
    statusCode = httpStatus.UNAUTHORIZED;
    message = "Validation error";
  }
  //
  else if (error instanceof PrismaClientKnownRequestError) {
    //
    if (error.code === "P2002") {
      message = "Unique constraint failed";
      statusCode = httpStatus.CONFLICT;
    }
  }
  // format error class
  else if (error instanceof Error) {
    statusCode = httpStatus.BAD_REQUEST;
    message = error.message;
  }
  //send response to the client
  res.status(statusCode).json({
    success: false,
    message,
    errorDetails: error,
    // stack: error.stack,
  });
};
