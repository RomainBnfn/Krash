export const FormErrors = {
    REQUIRED: "REQUIRED",
    EMAIL_FORMAT: "EMAIL_FORMAT",
} as const;

export type FormError = (typeof FormErrors)[keyof typeof FormErrors];
