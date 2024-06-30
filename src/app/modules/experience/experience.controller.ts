import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { experienceServices } from "./experience.service";

const createExperience = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const result = await experienceServices.createExperience(payload);

  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Experience created successfully",
    data: result,
  });
});

const getExperiences = handleAsyncTryCatch(async (req, res) => {
  const result = await experienceServices.getExperiences();
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experiences retrived successfully",
    data: result,
  });
});

const setExperience = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await experienceServices.setExperience(id, payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience updated successfully",
    data: result,
  });
});
const removeExperience = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await experienceServices.removeExperience(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experiencerience removed successfully",
    data: result,
  });
});
export const experienceControllers = {
  createExperience,
  getExperiences,
  setExperience,
  removeExperience,
};
