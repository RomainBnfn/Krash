import React from "react";
import { Formik } from "formik";
import { LoginFormModel } from "../../../../models/forms/loginForm.model";
import LoginFormContent from "./LoginFormContent";
import "./LoginForm.scss";

const INITIAL_VALUES: LoginFormModel = {
    userName: "",
    password: "",
};

/**
 * Login form
 * @constructor
 */
const LoginForm = () => {
    const onSubmit = (values: LoginFormModel) => {
        alert(JSON.stringify(values));
    };
    return (
        <Formik<LoginFormModel>
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
        >
            <LoginFormContent />
        </Formik>
    );
};
export default LoginForm;
