import { DatabaseReference, ref, update } from "firebase/database";
import { fireDatabase } from "../index";
import { FireDatabaseKeys } from "../enums/fireDatabaseKeys.enum";
import { LightKrashModel } from "../models/krash/lightKrash.model";
import { LightUserModel } from "../models/user/lightUser.model";
import FireDatabaseService from "./fireDatabaseService";
import { getOrThrow } from "../utils/common.utils";

namespace KrashService {
    /**
     * Return the db ref of the user allowed krashes
     * @param userId
     */
    export const getUserKrashesReference = (
        userId: string,
    ): DatabaseReference => {
        return ref(fireDatabase, `${FireDatabaseKeys.USERS}/${userId}`);
    };

    /**
     * Create a krash
     * @param krash
     * @param creator
     */
    export const createOrUpdateKrash = async (
        krash: LightKrashModel,
        creator: LightUserModel,
    ): Promise<void> => {
        if (!krash.uuid) {
            krash.uuid = getOrThrow(
                FireDatabaseService.getNewRefInArray(FireDatabaseKeys.KRASHES),
            );
        }
        let updates: any = {
            [`/${FireDatabaseKeys.KRASHES}/${krash.uuid}`]: krash,
            [`/${FireDatabaseKeys.USERS}/${creator.uid}/krashes/${krash.uuid}`]:
                krash,
        };
        await update(ref(fireDatabase), updates);
    };

    /**
     * Delete a krash
     * @param krashUid
     */
    export const deleteKrash = async (krashUid: string): Promise<void> => {
        await Promise.all([
            FireDatabaseService.remove(
                `/${FireDatabaseKeys.KRASHES}/${krashUid}`,
            ),
            FireDatabaseService.remove(
                `/${FireDatabaseKeys.USERS}/*/krashes/${krashUid}`,
            ),
        ]);
    };
}
export default KrashService;
