import React from "react";
import {ToastContainer} from "react-bootstrap";

import "./Toasts.scss";
import {ChildrenProps} from "../../models/childrenProps";

/**
 * All toasts container
 * @constructor
 */
const AppToastContainer = ({ children }: ChildrenProps) => {
    return (
        <ToastContainer position="top-end" className="ToastsContainer">
            {children}
        </ToastContainer>
    );
};

export default AppToastContainer;
