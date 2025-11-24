import db from "../db/db";
import { UserModel } from "../models/user-model";
import { CreateUserDto } from "../dtos/create-user";

export async function registerRepo(user: CreateUserDto): Promise<UserModel> {
  return await db.transaction(async trx => {

    const [createdUser] = await trx<UserModel>("app.Users")
      .insert(user)
      .returning("*");

    if (createdUser) {
      await trx("app.user_roles").insert([{
        userId: createdUser.id,
        roleId: 1,
      }]);
    }

    return createdUser;
  });
}

export async function loginRepo(email:string): Promise<UserModel | undefined>{
  return await db<UserModel>("app.users").where({email}).first();
}
