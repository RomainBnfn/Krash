import React from "react";
import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import FormField from "../../../../components/Forms/FormField/FormField";
import {useAppFormik} from "../../../../hooks/appFormikHooks";

/**
 * Register formik form content
 * @constructor
 */
const RegisterFormContent = () => {
    const { submitOnEnterKeyPress } = useAppFormik();
    return (
        <form className={"RegisterFormContent"} onKeyUp={submitOnEnterKeyPress}>
            <FormField name={"userName"} label={"Nom d'utilisateur"} />
            <FormField
                name={"password"}
                label={"Mot de passe"}
                type={"password"}
            />
            <FormField
                name={"passwordConfirmation"}
                label={"Confirmez votre de passe"}
                type={"password"}
            />
            <SubmitFormButton />
        </form>
    );
};

export default RegisterFormContent;
