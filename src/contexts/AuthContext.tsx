import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserModel } from "../models/user.model";
import UserService from "../services/userService";
import { onAuthStateChanged, UserInfo } from "firebase/auth";
import { auth } from "../index";

interface AuthContextModel {
    isAuthenticated: boolean;
    user: UserModel | undefined;

    loginWithEmailAndPassword(email: string, password: string): Promise<void>;

    registerWithEmailAndPassword(
        email: string,
        password: string,
    ): Promise<void>;

    logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextModel>({
    isAuthenticated: false,
    user: undefined,
    async loginWithEmailAndPassword() {},
    async registerWithEmailAndPassword() {},
    async logout() {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props: { children?: ReactNode }) => {
    const [user, setUser] = useState<UserModel>();

    /**
     * Put the user into the state if defined
     * @param user
     */
    const handleRegisterAndLogResponse = (
        user: UserInfo | null | undefined,
    ) => {
        if (user) {
            setUser(user as unknown as UserModel);
        }
    };

    /**
     * Use this to allow the user to stay logged event with Ctrl R
     */
    onAuthStateChanged(auth, handleRegisterAndLogResponse);

    /**
     * Try to log in with email & password
     * @param email
     * @param password
     */
    const loginWithEmailAndPassword = async (
        email: string,
        password: string,
    ) => {
        await UserService.loginFromEmailAndPassword(email, password)
            .then((cred) => cred?.user)
            .then(handleRegisterAndLogResponse);
    };

    /**
     * Try to register a new user with email & password
     * @param email
     * @param password
     */
    const registerWithEmailAndPassword = async (
        email: string,
        password: string,
    ) => {
        await UserService.createFromEmailAndPassword(email, password)
            .then((cred) => cred?.user)
            .then(handleRegisterAndLogResponse);
    };

    /**
     * Try to log out from the app
     */
    const logout = async () => {
        await UserService.logout().then(() => {
            setUser(undefined);
        });
    };

    const values = useMemo(
        (): AuthContextModel => ({
            user: user,
            isAuthenticated: !!user,
            loginWithEmailAndPassword,
            registerWithEmailAndPassword,
            logout,
        }),
        [user],
    );
    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
};
