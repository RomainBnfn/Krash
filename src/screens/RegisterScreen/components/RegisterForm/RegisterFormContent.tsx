import React from "react";
import FormField from "../../../../components/Forms/FormField";
import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";

const RegisterFormContent = () => {
    return (
        <div className={"RegisterFormContent"}>
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
        </div>
    );
};

export default RegisterFormContent;
