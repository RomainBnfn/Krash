import React, { useId } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";

interface FormFieldProps extends FieldAttributes<any> {
    label?: string;
    name?: string;
}

/**
 * Generic form field wrapper
 * @param name
 * @param label
 * @param fieldProps
 * @constructor
 */
const FormField = ({ name, label, ...fieldProps }: FormFieldProps) => {
    const id = useId();
    return (
        <FloatingLabel
            controlId={name}
            label={label ?? ""}
            className={"FormField"}
        >
            <Form.Control
                id={id}
                as={Field}
                className={"FormField-field"}
                name={name}
                {...fieldProps}
            ></Form.Control>
        </FloatingLabel>
    );
};

export default FormField;
