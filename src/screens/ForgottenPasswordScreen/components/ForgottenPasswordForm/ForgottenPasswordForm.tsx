import React from "react";
import { Formik } from "formik";
import ForgottenPasswordFormContent from "./ForgottenPasswordFormContent";
import "./ForgottenPasswordForm.scss";
import { useAuth } from "../../../../contexts/AuthContext";

import { useToast } from "../../../../contexts/ToastContext";
import { useTranslation } from "react-i18next";
import {
    ForgottenPasswordFormModel,
    ForgottenPasswordFormSchema,
} from "../../../../models/forms/forgottenPasswordForm.model";

const INITIAL_VALUES: ForgottenPasswordFormModel = {
    email: "",
};
/**
 * Register form
 * @constructor
 */
const ForgottenPasswordForm = () => {
    const { registerWithEmailAndPassword } = useAuth();
    const { displayErrorToast } = useToast();
    const { t } = useTranslation();

    /**
     * Try to reset user's password
     * @param values
     */
    const onSubmit = async (values: ForgottenPasswordFormModel) => {
        // await registerWithEmailAndPassword(values.email, values.password).catch(
        //     (error: FirebaseError) => {
        //         displayErrorToast({
        //             message: t(`ERRORS.FIREBASE.${error.code.toUpperCase()}`),
        //         });
        //     },
        // );
    };

    return (
        <Formik<ForgottenPasswordFormModel>
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
            validationSchema={ForgottenPasswordFormSchema}
        >
            <ForgottenPasswordFormContent />
        </Formik>
    );
};

export default ForgottenPasswordForm;
