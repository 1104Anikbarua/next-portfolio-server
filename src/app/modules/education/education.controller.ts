import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { educationServices } from "./education.service";

const createEducation = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const result = await educationServices.createEducation(payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Education created successfully",
    data: result,
  });
});
const getEducations = handleAsyncTryCatch(async (req, res) => {
  const result = await educationServices.getEducations();
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Educations retrived successfully",
    data: result,
  });
});

const setEducation = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  const result = await educationServices.setEducation(id, payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Education updated successfully",
    data: result,
  });
});
const deleteEducation = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await educationServices.removeEducation(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Education removed successfully",
    data: result,
  });
});
export const educationController = {
  createEducation,
  getEducations,
  setEducation,
  deleteEducation,
};
