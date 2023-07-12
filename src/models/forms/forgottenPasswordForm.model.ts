import * as Yup from "yup";
import {FormErrors} from "../../enums/formErrors.enum";

/**
 * Forgotten password form model
 */
export interface ForgottenPasswordFormModel {
    email: string;
}

/**
 * Forgotten password form schema
 */
export const ForgottenPasswordFormSchema =
    Yup.object<ForgottenPasswordFormModel>().shape({
        email: Yup.string()
            .email(FormErrors.EMAIL_FORMAT)
            .required(FormErrors.REQUIRED)
            .min(0, FormErrors.REQUIRED),
    });
