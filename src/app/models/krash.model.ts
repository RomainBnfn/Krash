import { KrashUserRight } from "./krashUserRight.model";
import { User } from "./user.model";

export interface Krash {
    id: string;
    name: string;
    owner: User;
    allowedUsers: KrashUserRight[];
}
