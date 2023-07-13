import { LightUserModel } from "./lightUser.model";
import { LightKrashModel } from "../krash/lightKrash.model";

export interface UserOverviewModel extends LightUserModel {
    krashes: LightKrashModel[];
}
