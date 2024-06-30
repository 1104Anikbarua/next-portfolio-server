import { Skill } from "@prisma/client";
import { prisma } from "../../utlis/prisma.utlis";

const getSkills = async () => {
  const result = await prisma.skill.findMany({});
  return result;
};

const setSkill = async (id: string, payload: Partial<Skill>) => {
  const result = await prisma.skill.update({
    where: { id },
    data: payload,
  });
  return result;
};

const createSkill = async (payload: Skill) => {
  const result = await prisma.skill.create({ data: payload });
  return result;
};

const removeSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: { id },
  });
  return result;
};

export const skillServices = {
  getSkills,
  setSkill,
  createSkill,
  removeSkill,
};
