import React from "react";
import Screen from "../../components/Screen/Screen";
import { useUserOverview } from "../../contexts/UserOverviewContext";

import "./HomeScreen.scss";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
    const { t } = useTranslation();
    const { userOverview } = useUserOverview();
    return (
        <Screen className={"HomeScreen"} centered={true}>
            <h2>{t("HOME.TITLE")}</h2>
            {JSON.stringify(userOverview)}
        </Screen>
    );
};

export default HomeScreen;
