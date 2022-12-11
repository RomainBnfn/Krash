import { User } from "./user.model";
import { Krash } from "./krash.model";

export type KrashRight = "R" | "RW";

export interface KrashUserRight {
    id: string;
    krashId: string;
    user: User;
    right: KrashRight;
}

export const hasUserRight = (
    userId: string,
    right: KrashRight,
    krash: Krash
): boolean => {
    return (
        krash.owner.id === userId ||
        krash.allowedUsers.some(
            (r) => r.right === right && r.user.id === userId
        )
    );
};
