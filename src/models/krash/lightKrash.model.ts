import { KrashModel } from "./krash.model";

export interface LightKrashModel
    extends Pick<KrashModel, "name" | "admin" | "logo"> {}
