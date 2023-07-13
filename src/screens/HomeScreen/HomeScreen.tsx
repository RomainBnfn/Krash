import React from "react";
import Screen from "../../components/Screen/Screen";
import { useUserOverview } from "../../contexts/UserOverviewContext";

const HomeScreen = () => {
    const { userOverview } = useUserOverview();
    return (
        <Screen>
            Home page
            {JSON.stringify(userOverview)}
        </Screen>
    );
};

export default HomeScreen;
