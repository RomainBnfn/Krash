import {LightKrashModel} from "../krash/lightKrash.model";
import * as Yup from "yup";
import {FormErrors} from "../../enums/formErrors.enum";

/**
 * Krash form model
 */
export interface KrashFormModel
    extends Omit<LightKrashModel, "uuid" | "admin"> {}

/**
 * Krash form schema
 */
export const LoginFormSchema = Yup.object<KrashFormModel>().shape({
    name: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
    description: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
    logo: Yup.string()
        .required(FormErrors.REQUIRED)
        .min(0, FormErrors.REQUIRED),
});
