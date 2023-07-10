import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserModel } from "../models/user.model";

interface AuthContextModel {
    isAuthenticated: boolean;
    user: UserModel | undefined;

    fakeLogin(): void;

    fakeLogout(): void;
}

const AuthContext = createContext<AuthContextModel>({
    isAuthenticated: false,
    user: undefined,
    fakeLogin() {},
    fakeLogout() {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props: { children?: ReactNode }) => {
    const [user, setUser] = useState<UserModel>();
    const values = useMemo(
        (): AuthContextModel => ({
            user: user,
            isAuthenticated: !!user,
            fakeLogin() {
                setUser({
                    id: "fakeid",
                    userName: "Fake user",
                });
            },
            fakeLogout() {
                setUser(undefined);
            },
        }),
        [user],
    );
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};
