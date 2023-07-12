import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "../../AppRoutes";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LogScreen from "../../components/LogScreen/LogScreen";
import {useTranslation} from "react-i18next";

/**
 * Register screen
 * @constructor
 */
const RegisterScreen = () => {
    const { t } = useTranslation();
    return (
        <LogScreen>
            <h2>{t("REGISTER.TITLE")}</h2>
            <RegisterForm />
            <Link to={Routes.login}>{t("REGISTER.ALREADY_REGISTERED")}</Link>
        </LogScreen>
    );
};

export default RegisterScreen;
