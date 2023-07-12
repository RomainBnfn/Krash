import * as Yup from "yup";
import {TestContext} from "yup";
import {FormErrors} from "../../enums/formErrors.enum";

/**
 * Register form model
 */
export interface RegisterFormModel {
    email: string;
    password: string;
    passwordConfirmation: string;
}

/**
 * Register form schema
 */
export const RegisterFormSchema = Yup.object<RegisterFormModel>().shape({
    email: Yup.string()
        .email(FormErrors.EMAIL_FORMAT)
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
    password: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
    passwordConfirmation: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED)
        .test(
            "Same passwords",
            "PASSWORD_CONFIRMATION",
            (passwordConfirmation, context: TestContext) => {
                return passwordConfirmation === context.parent.password;
            },
        ),
});
