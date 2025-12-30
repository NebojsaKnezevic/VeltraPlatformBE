import {
  loginRepo,
  registerRepo,
  userRoles,
} from "../repository/auth-repository";
import { CreateUserDto } from "../dtos/create-user";
import { hashPassword, verifyPassword } from "../helpers/auth";
import {
  CustomError,
  InvalidCredentialsError,
  NotFoundError,
  ValidationError,
} from "../errors/errors";
import { UserModel } from "models/user-model";
import jwt from "jsonwebtoken";

export async function registerService(user: CreateUserDto): Promise<UserModel> {
  user.password = await hashPassword(user.password);
  const result = await registerRepo(user);
  if (!result) throw new NotFoundError("User creation failed");
  return result;
}

export async function loginService(
  email: string,
  password: string
): Promise<[UserModel, string]> {
  const user: UserModel | undefined = await loginRepo(email);

  if (!user) {
    throw new InvalidCredentialsError("Invalid email or password");
  }

  if (!(await verifyPassword(password, user.password))) {
    throw new InvalidCredentialsError("Invalid email or password");
  }

  if (!user.emailVerifiedAt) {
    throw new CustomError("User not verified.", 401);
  }

  const now = Date.now();
  const verifiedAt = new Date(user.emailVerifiedAt).getTime();

  if (verifiedAt > now) {
    const diffMs = verifiedAt - now;

    const mins = Math.floor(diffMs / 1000 / 60);
    const hours = Math.floor(mins / 60);
    const remainingMinutes = mins % 60;

    const message =
      hours > 0
        ? `Account will be active in ${hours}h ${remainingMinutes}m.`
        : `Account will be active in ${remainingMinutes} minutes.`;

    throw new CustomError(message, 403);
  }

  if (!user.isActive) {
    throw new CustomError("User is inactive", 401);
  }

  const roles = await userRoles(user.id);
  if (!roles) throw new ValidationError("failed to fetch roles from db.");
  user.roles = roles.map((x) => x.role as string);

  const secret = process.env.JWT_SECRET;
  if (!secret) throw new CustomError("JWT secret key is missing from .env");
  const token = jwt.sign(user, secret, { expiresIn: "5m" });

  user.password = "";
  return [user, token];
}
