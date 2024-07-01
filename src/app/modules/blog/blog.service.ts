import { Blog } from "@prisma/client";
import { prisma } from "../../utlis/prisma.utlis";

const createBlog = async (id: string, payload: Blog) => {
  payload.userId = id;
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const getBlogs = async () => {
  const result = await prisma.blog.findMany({});
  return result;
};

const getBlog = async (id: string) => {
  const result = await prisma.blog.findUnique({ where: { id } });
  return result;
};

const setBlog = async (id: string, payload: Partial<Blog>) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};
const removeBlog = async (id: string) => {
  const result = await prisma.blog.delete({
    where: { id },
  });
  return result;
};

export const blogServices = {
  createBlog,
  getBlogs,
  setBlog,
  removeBlog,
  getBlog,
};
