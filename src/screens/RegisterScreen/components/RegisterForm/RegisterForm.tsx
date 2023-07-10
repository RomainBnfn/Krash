import React from "react";
import { Formik } from "formik";
import { RegisterFormModel } from "../../../../models/forms/registerForm.model";
import RegisterFormContent from "./RegisterFormContent";
import "./RegisterForm.scss";

const INITIAL_VALUES: RegisterFormModel = {
    userName: "",
    password: "",
    passwordConfirmation: "",
};
/**
 * Register form
 * @constructor
 */
const RegisterForm = () => {
    const onSubmit = (values: RegisterFormModel) => {
        alert(JSON.stringify(values));
    };
    return (
        <Formik<RegisterFormModel>
            initialValues={INITIAL_VALUES}
            onSubmit={onSubmit}
        >
            <RegisterFormContent />
        </Formik>
    );
};

export default RegisterForm;
