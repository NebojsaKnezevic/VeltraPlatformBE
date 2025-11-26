import { UserModel } from "models/user-model";
import { Message } from "../models/api-response";

declare module "express-serve-static-core" {
  interface Request {
    messages: Message[];
    addMessage: (msg: Message) => void;
    user: UserModel;
  }
}
