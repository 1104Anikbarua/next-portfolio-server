import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { projectServices } from "./project.service";

const createProject = handleAsyncTryCatch(async (req, res) => {
  const payload = req.body;
  const result = await projectServices.createProject(payload);

  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Project created successfully",
    data: result,
  });
});

const getProjects = handleAsyncTryCatch(async (req, res) => {
  const result = await projectServices.getProjects();
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Projects retrived successfully",
    data: result,
  });
});

const setProject = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await projectServices.setProject(id, payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project updated successfully",
    data: result,
  });
});
const removeProject = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.removeProject(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Projectrience removed successfully",
    data: result,
  });
});
export const projectControllers = {
  createProject,
  getProjects,
  setProject,
  removeProject,
};
