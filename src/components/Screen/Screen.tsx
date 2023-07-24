import React, { ComponentProps } from "react";
import Navbar from "../Navbar/Navbar";
import classNames from "classnames";
import "./Screen.scss";
import { generateBootstrapResponsiveValues } from "../../utils/style.utils";

interface ScreenProps extends ComponentProps<any> {
    centered?: boolean;
}

/**
 * Common component of screen pages
 * @param centered
 * @param className
 * @param props
 * @constructor
 */
const Screen = ({ centered, className, ...props }: ScreenProps) => {
    return (
        <>
            <Navbar />
            <div
                className={classNames("Screen", className, {
                    "Screen-centered": centered,
                    [generateBootstrapResponsiveValues("col", 12, 7)]: centered,
                })}
                {...props}
            />
        </>
    );
};

export default Screen;
