import { prisma } from "../../utlis/prisma.utlis";
import { User } from "@prisma/client";
import bcyrpt from "bcrypt";
import { getToken } from "../../utlis/getToken.utlis";
import config from "../../config";

export const selectField = {
  id: true,
  name: true,
  email: true,
  createdAt: true,
  updatedAt: true,
  imageUrl: true,
};
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

// get user profile by token id starts here
const getProfile = async (id: string) => {
  // check is user is exists or not
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
    select: selectField,
  });
  return result;
};
export const authServices = {
  logIn,
  getProfile,
};
