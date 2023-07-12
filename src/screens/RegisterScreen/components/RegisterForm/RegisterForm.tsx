import React from "react";
import { Formik } from "formik";
import {
    RegisterFormModel,
    RegisterFormSchema,
} from "../../../../models/forms/registerForm.model";
import RegisterFormContent from "./RegisterFormContent";
import "./RegisterForm.scss";
import { useAuth } from "../../../../contexts/AuthContext";

import { useToast } from "../../../../contexts/ToastContext";
import { useTranslation } from "react-i18next";
import { FirebaseError } from "firebase/app";

const INITIAL_VALUES: RegisterFormModel = {
    email: "",
    password: "",
    passwordConfirmation: "",
};
/**
 * Register form
 * @constructor
 */
const RegisterForm = () => {
    const { registerWithEmailAndPassword } = useAuth();
    const { displayErrorToast } = useToast();
    const { t } = useTranslation();

    /**
     * Try to register user & handle error if there are
     * @param values
     */
    const onSubmit = async (values: RegisterFormModel) => {
        await registerWithEmailAndPassword(values.email, values.password).catch(
            (error: FirebaseError) => {
                displayErrorToast({
                    message: t(`ERRORS.FIREBASE.${error.code.toUpperCase()}`),
                });
            },
        );
    };

    return (
        <Formik<RegisterFormModel>
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
            validationSchema={RegisterFormSchema}
        >
            <RegisterFormContent />
        </Formik>
    );
};

export default RegisterForm;
