import { KrashOptionModel } from "./krashOption.model";
import { KrashPeriodModel } from "./krashPeriod.model";
import { LightUserModel } from "../user/lightUser.model";

export interface KrashModel {
    uuid: string;
    admin: LightUserModel;
    name: string;
    description: string;
    logo: string;
    allowedUsers: LightUserModel[];
    options: KrashOptionModel;
    periods: KrashPeriodModel[];
}
