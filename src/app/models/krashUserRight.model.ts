import { User } from "./user.model";

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
    rights: KrashUserRight[]
): boolean => {
    return rights.some((r) => r.right === right && r.user.id === userId);
};
