import { KrashModel } from "./krash.model";

export interface LightKrashModel
    extends Pick<
        KrashModel,
        "uuid" | "name" | "description" | "admin" | "logo"
    > {}
