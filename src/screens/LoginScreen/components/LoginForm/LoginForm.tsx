import React from "react";
import { Formik } from "formik";
import {
    LoginFormModel,
    LoginFormSchema,
} from "../../../../models/forms/loginForm.model";
import LoginFormContent from "./LoginFormContent";
import "./LoginForm.scss";
import { useAuth } from "../../../../contexts/AuthContext";
import { useToast } from "../../../../contexts/ToastContext";
import { useTranslation } from "react-i18next";
import { FirebaseError } from "firebase/app";

const INITIAL_VALUES: LoginFormModel = {
    email: "",
    password: "",
};

/**
 * Login form
 * @constructor
 */
const LoginForm = () => {
    const { loginWithEmailAndPassword } = useAuth();
    const { t } = useTranslation();
    const { displayErrorToast } = useToast();

    /**
     * Try to log in user & handle error if there are
     * @param values
     */
    const onSubmit = async (values: LoginFormModel) => {
        await loginWithEmailAndPassword(values.email, values.password).catch(
            (error: FirebaseError) => {
                displayErrorToast({
                    message: t(`ERRORS.FIREBASE.${error.code.toUpperCase()}`),
                });
            },
        );
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
