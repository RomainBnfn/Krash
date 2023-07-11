import {useFormikContext} from "formik";

/**
 * Get the error of a form field
 * @param name
 */
export const useFieldError = (name?: string): string | undefined => {
    const { errors, touched } = useFormikContext();
    if (name && errors.hasOwnProperty(name) && touched.hasOwnProperty(name)) {
        return (errors as any)[name];
    }
};
