import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Routes } from "../AppRoutes";
import { ChildrenProps } from "../models/childrenProps";

export interface AuthenticatedGuardProps extends ChildrenProps {
    shouldBeAuthenticated?: boolean;
}

/**
 * Guard that redirect user into login path if it's not authenticated
 * @param children
 * @param shouldBeAuthenticated
 * @constructor
 */
const AuthenticatedGuard = ({
    children,
    shouldBeAuthenticated = true,
}: AuthenticatedGuardProps) => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated !== shouldBeAuthenticated) {
        const redirect = shouldBeAuthenticated ? Routes.login : Routes.home;
        return <Navigate to={redirect} />;
    }
    return <>{children}</>;
};

export default AuthenticatedGuard;
