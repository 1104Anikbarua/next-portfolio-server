import { prisma } from "../../utlis/prisma.utlis";
import { User } from "@prisma/client";
import bcyrpt from "bcrypt";
import { getToken } from "../../utlis/getToken.utlis";
import config from "../../config";

const logIn = async (payload: Partial<User>) => {
  const { email, password: currentPassword } = payload;
  const {
    password,
    email: userEmail,
    id,
    name,
  } = await prisma.user.findUniqueOrThrow({
    where: { email },
  });
  if (!userEmail) {
    throw new Error("Please check your email and password!");
  }
  const isPasswordMatched = bcyrpt.compare(currentPassword as string, password);
  if (!isPasswordMatched) {
    throw new Error("Please check your email and password!");
  }
  const jwtPayload = {
    email,
    id,
    name,
  };
  const accessToken = getToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );
  const refreshToken = getToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string
  );
  return {
    accessToken,
    refreshToken,
  };
};

export const authServices = {
  logIn,
};
