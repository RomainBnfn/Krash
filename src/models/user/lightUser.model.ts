import { UserModel } from "./user.model";

export interface LightUserModel extends Pick<UserModel, "uid" | "email"> {}
