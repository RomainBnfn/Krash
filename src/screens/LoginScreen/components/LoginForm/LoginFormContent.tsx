import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import React from "react";
import FormField from "../../../../components/Forms/FormField";

/**
 * The fields content of login form
 * @constructor
 */
const LoginFormContent = () => {
    return (
        <div className={"LoginFormContent"}>
            <FormField name={"userName"} label={"Nom d'utilisateur"} />
            <FormField
                name={"password"}
                label={"Mot de passe"}
                type={"password"}
            />
            <SubmitFormButton />
        </div>
    );
};

export default LoginFormContent;
