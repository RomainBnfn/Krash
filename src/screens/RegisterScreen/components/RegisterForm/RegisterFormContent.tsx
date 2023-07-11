import React from "react";
import SubmitFormButton from "../../../../components/Buttons/SubmitFormButton";
import FormField from "../../../../components/Forms/FormField/FormField";

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
