export const FireDatabaseKeys = {
    USERS: "users",
    KRASHES: "krashes",
} as const;

export type FireDatabaseKey =
    (typeof FireDatabaseKeys)[keyof typeof FireDatabaseKeys];
