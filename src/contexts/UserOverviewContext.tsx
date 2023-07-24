import { createContext, useContext, useMemo, useState } from "react";
import { ChildrenProps } from "../models/childrenProps";
import { onValue } from "firebase/database";
import { useAuth } from "./AuthContext";
import { UserOverviewModel } from "../models/user/userOverview.model";
import { useFirebaseQuery } from "../hooks/useFirebaseQuery";
import KrashService from "../services/krashService";

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
            return onValue(
                KrashService.getUserKrashesReference(user.uid),
                (data) => {
                    setOverview(data.val());
                },
            );
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
