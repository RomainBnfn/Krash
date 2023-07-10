import React from "react";
import { ChildrenProps } from "../../models/childrenProps";
import { generateBootstrapResponsiveValues } from "../../utils/style.utils";
import Screen from "../Screen/Screen";
import "./LogScreen.scss";

interface LogScreenProps extends ChildrenProps {}

/**
 * Common wrapper of Login & Register screens
 * @param children
 * @constructor
 */
const LogScreen = ({ children }: LogScreenProps) => {
    return (
        <Screen className={"LogScreen"}>
            <div className={generateBootstrapResponsiveValues("col", 10, 3)}>
                {children}
            </div>
        </Screen>
    );
};

export default LogScreen;
