import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { Routes } from "../../AppRoutes";
import LogScreen from "../../components/LogScreen/LogScreen";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
    const { t } = useTranslation();
    return (
        <LogScreen>
            <h2>{t("LOGIN.TITLE")}</h2>
            <LoginForm />
            <Link to={Routes.register}>{t("LOGIN.NOT_REGISTERED")}</Link>
        </LogScreen>
    );
};

export default LoginScreen;
