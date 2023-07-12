import React from "react";
import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import FormField from "../../../../components/Forms/FormField/FormField";
import {useAppFormik} from "../../../../hooks/useAppFormik";
import {useTranslation} from "react-i18next";

/**
 * Register formik form content
 * @constructor
 */
const RegisterFormContent = () => {
    const { t } = useTranslation();
    const { submitOnEnterKeyPress } = useAppFormik();
    return (
        <form className={"RegisterFormContent"} onKeyUp={submitOnEnterKeyPress}>
            <FormField
                name={"email"}
                type={"email"}
                label={t("REGISTER.EMAIL")}
            />
            <FormField
                name={"password"}
                label={t("REGISTER.PASSWORD")}
                type={"password"}
            />
            <FormField
                name={"passwordConfirmation"}
                label={t("REGISTER.CONFIRM_PASSWORD")}
                type={"password"}
            />
            <SubmitFormButton />
        </form>
    );
};

export default RegisterFormContent;
