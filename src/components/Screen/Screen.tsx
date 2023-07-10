import React, { ComponentProps } from "react";
import Navbar from "../Navbar/Navbar";

interface ScreenProps extends ComponentProps<any> {}

const Screen = (props: ScreenProps) => {
    return (
        <>
            <Navbar />
            <div {...props} />
        </>
    );
};

export default Screen;
