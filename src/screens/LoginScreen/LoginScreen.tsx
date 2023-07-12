import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { Routes } from "../../AppRoutes";
import LogScreen from "../../components/LogScreen/LogScreen";
import { useTranslation } from "react-i18next";

import "./LoginForm.scss";

const LoginScreen = () => {
    const { t } = useTranslation();
    return (
        <LogScreen>
            <h2>{t("LOGIN.TITLE")}</h2>
            <LoginForm />
            <div className={"LoginScreen-nav-row"}>
                <Link to={Routes.register}>{t("LOGIN.NOT_REGISTERED")}</Link>
                <Link to={Routes.forgottenPassword}>
                    {t("LOGIN.FORGOTTEN_PASSWORD")}
                </Link>
            </div>
        </LogScreen>
    );
};

export default LoginScreen;
