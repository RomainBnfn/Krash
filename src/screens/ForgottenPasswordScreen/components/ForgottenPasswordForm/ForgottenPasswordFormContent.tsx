import React from "react";
import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import FormField from "../../../../components/Forms/FormField/FormField";
import {useAppFormik} from "../../../../hooks/useAppFormik";
import {useTranslation} from "react-i18next";

/**
 * Register formik form content
 * @constructor
 */
const ForgottenPasswordFormContent = () => {
    const { t } = useTranslation();
    const { submitOnEnterKeyPress } = useAppFormik();
    return (
        <form
            className={"ForgottenPasswordFormContent"}
            onKeyUp={submitOnEnterKeyPress}
        >
            <FormField
                name={"email"}
                type={"email"}
                label={t("REGISTER.EMAIL")}
            />
            <SubmitFormButton />
        </form>
    );
};

export default ForgottenPasswordFormContent;
