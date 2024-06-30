import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { skillServices } from "./skill.service";

const createSkill = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const result = await skillServices.createSkill(payload);

  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Skill created successfully",
    data: result,
  });
});

const getSkills = handleAsyncTryCatch(async (req, res) => {
  const result = await skillServices.getSkills();
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skills retrived successfully",
    data: result,
  });
});

const setSkill = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await skillServices.setSkill(id, payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill updated successfully",
    data: result,
  });
});
const removeSkill = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await skillServices.removeSkill(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill removed successfully",
    data: result,
  });
});
export const skillControllers = {
  createSkill,
  getSkills,
  setSkill,
  removeSkill,
};
