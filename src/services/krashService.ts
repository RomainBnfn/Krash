import { child, DatabaseReference, push, ref, update } from "firebase/database";
import { fireDatabase } from "../index";
import { FireDatabaseKeys } from "../enums/fireDatabaseKeys.enum";
import { LightKrashModel } from "../models/krash/lightKrash.model";
import { LightUserModel } from "../models/user/lightUser.model";

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
            const newID = push(
                child(ref(fireDatabase), FireDatabaseKeys.KRASHES),
            ).key;
            if (newID) {
                krash.uuid = newID;
            } else {
                throw new Error();
            }
        }
        // fct
        let updates: any = {};
        updates[`/${FireDatabaseKeys.KRASHES}/${krash.uuid}`] = krash;
        updates[
            `/${FireDatabaseKeys.USERS}/${creator.uid}/krashes/${krash.uuid}`
        ] = krash;
        await update(ref(fireDatabase), updates);
    };
}
export default KrashService;
