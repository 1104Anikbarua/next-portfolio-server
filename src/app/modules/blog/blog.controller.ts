import httpStatus from "http-status";
import { handleAsyncTryCatch } from "../../utlis/asyncTryCatch.utlis";
import { handleSendResponse } from "../../utlis/sendResponse.utlis";
import { blogServices } from "./blog.service";

const createBlog = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.user;
  const payload = req.body;
  const result = await blogServices.createBlog(id, payload);

  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Blog created successfully",
    data: result,
  });
});

const getBlogs = handleAsyncTryCatch(async (req, res) => {
  const result = await blogServices.getBlogs();
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs retrived successfully",
    data: result,
  });
});

const getBlog = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.getBlog(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog retrived successfully",
    data: result,
  });
});

const setBlog = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await blogServices.setBlog(id, payload);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog updated successfully",
    data: result,
  });
});
const removeBlog = handleAsyncTryCatch(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.removeBlog(id);
  handleSendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog removed successfully",
    data: result,
  });
});
export const blogControllers = {
  createBlog,
  getBlogs,
  setBlog,
  removeBlog,
  getBlog,
};
