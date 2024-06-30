import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { authServices } from "./auth.service";
import config from "../../config";

const logIn = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const { accessToken, refreshToken, ...rest } = await authServices.logIn(
    payload
  );
  res.cookie("refreshToken", refreshToken, {
    secure: config.node_env === "production",
    httpOnly: true,
  });
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User logged in successfully",
    data: { accessToken, rest },
  });
});

export const authControllers = {
  logIn,
};
