import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import React from "react";
import FormField from "../../../../components/Forms/FormField/FormField";
import {useAppFormik} from "../../../../hooks/appFormikHooks";

/**
 * The fields content of login form
 * @constructor
 */
const LoginFormContent = () => {
    const { submitOnEnterKeyPress } = useAppFormik();
    return (
        <form className={"LoginFormContent"} onKeyUp={submitOnEnterKeyPress}>
            <FormField name={"userName"} label={"Nom d'utilisateur"} />
            <FormField
                name={"password"}
                label={"Mot de passe"}
                type={"password"}
            />
            <SubmitFormButton />
        </form>
    );
};

export default LoginFormContent;
