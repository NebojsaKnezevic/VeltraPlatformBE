import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"),     
  name: z.string().min(2)
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;