import React, { useId, useRef, useState } from "react";
import { FieldAttributes } from "formik/dist/Field";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useFieldError } from "./useFieldError";
import { Field, useFormikContext } from "formik";
import FormFieldError from "./FormFieldError";
import { faTrash as fasTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FileInputProps extends Omit<FieldAttributes<any>, "type"> {
    label?: string;
    name?: string;
}

const FormImageField = ({ name, label, ...fieldProps }: FileInputProps) => {
    const id = useId();
    const { values, setFieldValue } = useFormikContext<any>();
    const [displayedFile, setDisplayedFile] = useState<any>();

    const src =
        name && values?.hasOwnProperty(name)
            ? values[name]
            : fieldProps.value ?? "";
    const fieldError = useFieldError(name);
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={"FormImageField"}>
            <FloatingLabel
                id={name}
                label={label ?? ""}
                className={"FormField FormField-image"}
            >
                {!src && (
                    <Form.Control
                        id={id}
                        as={Field}
                        ref={hiddenInputRef}
                        name={name}
                        className={"FormField-field"}
                        value={undefined}
                        files={displayedFile}
                        onChange={(event) => {
                            if (name) {
                                const file = (event.target as any)
                                    .files[0] as File;
                                setDisplayedFile(file);
                                const reader = new FileReader();
                                reader.addEventListener("load", (event) => {
                                    setFieldValue(
                                        name,
                                        (event.target as any).result,
                                    );
                                });
                                reader.readAsDataURL(file);
                                // @ts-ignore
                                event.target.value = null;
                            }
                        }}
                        type="file"
                        capture
                        accept="image/*"
                        isInvalid={!!fieldError}
                        {...fieldProps}
                    />
                )}
                {src && (
                    <div className={"FormImageField-preview-wrapper"}>
                        <img
                            className={"FormImageField-preview-image"}
                            alt="imported images"
                            src={src}
                        />
                        <Button
                            className={"FormImageField-preview-button"}
                            variant={"danger"}
                            onClick={() => {
                                if (name) {
                                    setFieldValue(name, null);
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={fasTrash} />
                        </Button>
                    </div>
                )}

                <FormFieldError name={name} />
            </FloatingLabel>
        </div>
    );
};

export default FormImageField;
