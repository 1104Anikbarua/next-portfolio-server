import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export const getToken = (
  payload: JwtPayload,
  secret: Secret,
  expiresIn: string
) => {
  return jwt.sign(payload, secret, { expiresIn });
};
