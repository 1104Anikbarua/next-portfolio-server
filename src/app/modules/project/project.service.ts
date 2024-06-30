import { Project } from "@prisma/client";
import { prisma } from "../../utlis/prisma.utlis";

const getProjects = async () => {
  const result = await prisma.project.findMany({});
  return result;
};

const setProject = async (id: string, payload: Partial<Project>) => {
  const result = await prisma.project.update({
    where: { id },
    data: payload,
  });
  return result;
};

const createProject = async (payload: Project) => {
  const result = await prisma.project.create({ data: payload });
  return result;
};

const removeProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: { id },
  });
  return result;
};

export const projectServices = {
  getProjects,
  setProject,
  createProject,
  removeProject,
};
