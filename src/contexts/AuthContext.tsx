import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { User } from "../models/user.model";

interface AuthContextModel {
    isAuthenticated: boolean;
    user: User | undefined;

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
    const [user, setUser] = useState<User>();
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
