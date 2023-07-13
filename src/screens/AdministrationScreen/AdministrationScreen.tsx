import React from "react";
import Screen from "../../components/Screen/Screen";
import { useTranslation } from "react-i18next";

const AdministrationScreen = () => {
    const { t } = useTranslation();
    return (
        <Screen centered={true}>
            <h2>{t("ADMINISTRATION.TITLE")}</h2>
        </Screen>
    );
};

export default AdministrationScreen;
