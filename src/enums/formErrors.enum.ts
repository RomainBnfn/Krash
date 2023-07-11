export const FormErrors = {
    REQUIRED: "REQUIRED",
} as const;

export type FormError = (typeof FormErrors)[keyof typeof FormErrors];
 
