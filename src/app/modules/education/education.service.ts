import { Education } from "@prisma/client";
import { prisma } from "../../utlis/prisma.utlis";

const getEducations = async () => {
  const result = await prisma.education.findMany({});
  return result;
};

const setEducation = async (id: string, payload: Partial<Education>) => {
  const result = await prisma.education.update({
    where: { id },
    data: payload,
  });
  return result;
};

const createEducation = async (payload: Education) => {
  const result = await prisma.education.create({ data: payload });
  return result;
};

const removeEducation = async (id: string) => {
  const result = await prisma.education.delete({
    where: { id },
  });
  return result;
};

export const educationServices = {
  getEducations,
  setEducation,
  createEducation,
  removeEducation,
};
