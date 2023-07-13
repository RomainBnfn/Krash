import { createContext, useContext, useMemo, useState } from "react";
import { ChildrenProps } from "../models/childrenProps";
import { onValue, ref } from "firebase/database";
import { fireDatabase } from "../index";
import { FireDatabaseKeys } from "../enums/fireDatabaseKeys.enum";
import { useAuth } from "./AuthContext";
import { UserOverviewModel } from "../models/user/userOverview.model";
import { useFirebaseQuery } from "../hooks/useFirebaseQuery";

interface UserOverviewContextModel {
    userOverview: UserOverviewModel;
}

const UserOverviewContext = createContext<UserOverviewContextModel>({
    userOverview: {} as UserOverviewModel,
});

export const useUserOverview = () => useContext(UserOverviewContext);

export const UserOverviewContextProvider = ({ children }: ChildrenProps) => {
    const { user } = useAuth();
    const [overview, setOverview] = useState<UserOverviewModel>();

    useFirebaseQuery(() => {
        if (user?.uid) {
            let usersRef = ref(
                fireDatabase,
                `${FireDatabaseKeys.USERS}/${user.uid}`,
            );
            return onValue(usersRef, (data) => {
                setOverview(data.val());
            });

            // const userQuery = query(
            //     usersRef,
            //     orderByChild("uuid"),
            //     equalTo(user.uid),
            // );
        }
    });

    /**
     * Context values
     */
    const values = useMemo((): UserOverviewContextModel | undefined => {
        if (!overview) {
            return undefined;
        }
        return {
            userOverview: overview,
        };
    }, [overview]);

    if (!values) {
        return children;
    }
    return (
        <UserOverviewContext.Provider value={values}>
            {children}
        </UserOverviewContext.Provider>
    );
};
