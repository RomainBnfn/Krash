import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import React from "react";
import FormField from "../../../../components/Forms/FormField/FormField";
import {useAppFormik} from "../../../../hooks/useAppFormik";
import {useTranslation} from "react-i18next";

/**
 * The fields content of login form
 * @constructor
 */
const LoginFormContent = () => {
    const { t } = useTranslation();
    const { submitOnEnterKeyPress } = useAppFormik();
    return (
        <form className={"LoginFormContent"} onKeyUp={submitOnEnterKeyPress}>
            <FormField name={"email"} type={"email"} label={t("LOGIN.EMAIL")} />
            <FormField
                name={"password"}
                label={t("LOGIN.PASSWORD")}
                type={"password"}
            />
            <SubmitFormButton />
        </form>
    );
};

export default LoginFormContent;
