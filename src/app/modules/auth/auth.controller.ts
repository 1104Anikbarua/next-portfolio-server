import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { authServices } from "./auth.service";

const logIn = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const result = await authServices.logIn(payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    data: result,
  });
});

export const authControllers = {
  logIn,
};
