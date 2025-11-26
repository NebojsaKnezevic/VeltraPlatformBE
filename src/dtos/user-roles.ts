
import { z } from "zod/v3";


export const CreateUserRolesSchema = z.object({
    userId: z.number(),
    role: z.string()
});

export type GetUserRolesDto = z.infer<typeof CreateUserRolesSchema>