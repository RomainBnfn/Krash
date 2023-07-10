import React from "react";
import {useAuth} from "../contexts/AuthContext";
import {Navigate} from "react-router-dom";
import {Routes} from "../AppRoutes";
import {ChildrenProps} from "../models/childrenProps";

/**
 * Guard that redirect user into login path if its not authenticated
 * @param children
 * @constructor
 */
const AuthenticatedGuard = ({ children }: ChildrenProps) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to={Routes.login} />;
    }
    return <>{children}</>;
};

export default AuthenticatedGuard;
