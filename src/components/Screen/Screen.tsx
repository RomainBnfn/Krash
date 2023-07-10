import React from "react";
import Navbar from "../Navbar/Navbar";
import { ChildrenProps } from "../../models/childrenProps";

interface ScreenProps extends ChildrenProps {}

const Screen = ({ children }: ScreenProps) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default Screen;
