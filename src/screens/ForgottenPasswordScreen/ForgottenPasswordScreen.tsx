import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "../../AppRoutes";
import ForgottenPasswordForm from "./components/ForgottenPasswordForm/ForgottenPasswordForm";
import LogScreen from "../../components/LogScreen/LogScreen";
import {useTranslation} from "react-i18next";

/**
 * Register screen
 * @constructor
 */
const ForgottenPasswordScreen = () => {
    const { t } = useTranslation();
    return (
        <LogScreen>
            <h2>{t("FORGOTTEN_PASSWORD.TITLE")}</h2>
            <ForgottenPasswordForm />
            <Link to={Routes.login}>{t("FORGOTTEN_PASSWORD.CANCEL")}</Link>
        </LogScreen>
    );
};

export default ForgottenPasswordScreen;
