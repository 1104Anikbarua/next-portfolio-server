import { Experience } from "@prisma/client";
import { prisma } from "../../utlis/prisma.utlis";

const getExperiences = async () => {
  const result = await prisma.experience.findMany({});
  return result;
};

const setExperience = async (id: string, payload: Partial<Experience>) => {
  const result = await prisma.experience.update({
    where: { id },
    data: payload,
  });
  return result;
};

const createExperience = async (payload: Experience) => {
  const result = await prisma.experience.create({ data: payload });
  return result;
};

const removeExperience = async (id: string) => {
  const result = await prisma.experience.delete({
    where: { id },
  });
  return result;
};

export const experienceServices = {
  getExperiences,
  setExperience,
  createExperience,
  removeExperience,
};
