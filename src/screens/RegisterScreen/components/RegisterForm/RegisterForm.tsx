import React from "react";
import { Formik } from "formik";
import {
    RegisterFormModel,
    RegisterFormSchema,
} from "../../../../models/forms/registerForm.model";
import RegisterFormContent from "./RegisterFormContent";
import "./RegisterForm.scss";
import { useAuth } from "../../../../contexts/AuthContext";

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
    const { registerWithEmailAndPassword } = useAuth();

    /**
     * Try to register user & handle error if there are
     * @param values
     */
    const onSubmit = async (values: RegisterFormModel) => {
        await registerWithEmailAndPassword(values.userName, values.password);
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
