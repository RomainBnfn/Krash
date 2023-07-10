import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { Routes } from "../../AppRoutes";
import LogScreen from "../../components/LogScreen/LogScreen";

const LoginScreen = () => {
    return (
        <LogScreen>
            <h2>Connexion</h2>
            <LoginForm />
            <Link to={Routes.register}> Pas inscrit ?</Link>
        </LogScreen>
    );
};

export default LoginScreen;
