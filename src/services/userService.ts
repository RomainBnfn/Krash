import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
} from "firebase/auth";
import { auth } from "../index";

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
        return createUserWithEmailAndPassword(auth, email, password);
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
        return signInWithEmailAndPassword(auth, email, password);
    };

    /**
     * Log out from firebase
     */
    export const logout = async () => {
        return signOut(auth);
    };
}
export default UserService;
