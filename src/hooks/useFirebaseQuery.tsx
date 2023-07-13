import {Unsubscribe} from "firebase/database";
import {useEffect} from "react";

/**
 * Wrap the query function into a use effect & auto unsubscribe when deps change
 * @param queryFunction
 */
export const useFirebaseQuery = (
    queryFunction: () => Unsubscribe | undefined,
) => {
    useEffect(() => {
        const refUnsubscribe = queryFunction();
        return () => {
            refUnsubscribe?.();
        };
    }, [queryFunction]);
};
