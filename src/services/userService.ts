import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
} from "firebase/auth";
import { fireAuth } from "../index";

namespace UserService {
    /**
     * Try to register a new user with email & password from firebase
     * @param email
     * @param password
     */
    export const createFromEmailAndPassword = (
        email: string,
        password: string,
    ): Promise<UserCredential | void> => {
        return createUserWithEmailAndPassword(fireAuth, email, password);
    };

    /**
     * Try to log in with email & password from firebase
     * @param email
     * @param password
     */
    export const loginFromEmailAndPassword = (
        email: string,
        password: string,
    ): Promise<UserCredential | void> => {
        return signInWithEmailAndPassword(fireAuth, email, password);
    };

    /**
     * Log out from firebase
     */
    export const logout = async () => {
        return signOut(fireAuth);
    };

    /**
     * Send password reset email
     * @param email
     */
    export const resetPassword = async (email: string) => {
        return sendPasswordResetEmail(fireAuth, email);
    };
}
export default UserService;
