import config from "../config";
import { prisma } from "../utlis/prisma.utlis";
import bcrypt from "bcrypt";

const user = {
  name: "Anik Barua",
  email: "user@gmail.com",
  password: "123456",
};

export const createUser = async () => {
  try {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
    if (!isUserExists) {
      const saltRounds = await bcrypt.genSalt(Number(config.salt));
      const hashPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashPassword;
      await prisma.user.create({
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
