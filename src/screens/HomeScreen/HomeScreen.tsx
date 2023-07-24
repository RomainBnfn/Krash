import React from "react";
import Screen from "../../components/Screen/Screen";

import "./HomeScreen.scss";
import { useTranslation } from "react-i18next";
import KrashCards from "./components/KrashCards/KrashCards";

const HomeScreen = () => {
    const { t } = useTranslation();
    return (
        <Screen className={"HomeScreen"} centered={true}>
            <h2>{t("HOME.TITLE")}</h2>
            <KrashCards />
        </Screen>
    );
};

export default HomeScreen;
