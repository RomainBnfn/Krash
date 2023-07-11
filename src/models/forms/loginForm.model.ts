import * as Yup from "yup";
import {FormErrors} from "../../enums/formErrors.enum";

/**
 * Login form model
 */
export interface LoginFormModel {
    userName: string;
    password: string;
}

/**
 * Login form schema
 */
export const LoginFormSchema = Yup.object<LoginFormModel>().shape({
    userName: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
    password: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
});
