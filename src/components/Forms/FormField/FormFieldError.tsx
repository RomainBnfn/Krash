import React from "react";
import "./FieldField.scss";
import { Form } from "react-bootstrap";
import { useFieldError } from "./useFieldError";

interface FormFieldErrorProps {
    name?: string;
    // base translate path
}

/**
 * Component that display field error if it exists
 * @constructor
 */
const FormFieldError = ({ name }: FormFieldErrorProps) => {
    const fieldError = useFieldError(name);
    if (!fieldError) {
        return <></>;
    }
    return (
        <Form.Control.Feedback type="invalid" className={"FormFieldError"}>
            {fieldError}
        </Form.Control.Feedback>
    );
};

export default FormFieldError;
