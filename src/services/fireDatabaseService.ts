import { child, push, ref, remove as firebaseRemove } from "firebase/database";
import { fireDatabase } from "../index";

namespace FireDatabaseService {
    /**
     * Return a new ref from an array path in database
     * @param path
     */
    export const getNewRefInArray = (path: string): string | null => {
        return push(child(ref(fireDatabase), path)).key;
    };

    /**
     * Return a new ref from an array path in database
     * @param path
     */
    export const remove = async (path: string): Promise<void> => {
        return firebaseRemove(ref(fireDatabase, path));
    };
}
export default FireDatabaseService;
