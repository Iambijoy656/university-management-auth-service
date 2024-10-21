import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string => {
  return jwt.sign(payload, secret, {
    expiresIn: expireTime,
  });
};

const verifyToken = (token: string, Secret: Secret): JwtPayload => {
  return jwt.verify(token, Secret) as JwtPayload;
};

export const jwtHelpers = {
  createToken,
  verifyToken,
};
