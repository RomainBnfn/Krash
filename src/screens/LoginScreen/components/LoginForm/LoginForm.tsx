import React from "react";
import { Formik } from "formik";
import {
    LoginFormModel,
    LoginFormSchema,
} from "../../../../models/forms/loginForm.model";
import LoginFormContent from "./LoginFormContent";
import "./LoginForm.scss";
import { useAuth } from "../../../../contexts/AuthContext";

const INITIAL_VALUES: LoginFormModel = {
    userName: "",
    password: "",
};

/**
 * Login form
 * @constructor
 */
const LoginForm = () => {
    const { loginWithEmailAndPassword } = useAuth();

    /**
     * Try to log in user & handle error if there are
     * @param values
     */
    const onSubmit = async (values: LoginFormModel) => {
        await loginWithEmailAndPassword(values.userName, values.password);
    };

    return (
        <Formik<LoginFormModel>
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
            validationSchema={LoginFormSchema}
        >
            <LoginFormContent />
        </Formik>
    );
};
export default LoginForm;
