import React from "react";
import { Button } from "react-bootstrap";
import { useFormikContext } from "formik";

interface SubmitFormButtonProps {
    label?: String;
}

const DEFAULT_LABEL = "Confirmer";

/**
 * Button that submit formik form and is disabled if the form is
 * @param label
 * @constructor
 */
const SubmitFormButton = ({ label }: SubmitFormButtonProps) => {
    const { submitForm, errors, dirty } = useFormikContext();
    return (
        <Button
            onClick={submitForm}
            disabled={Object.keys(errors).length > 0 || !dirty}
        >
            {label ?? DEFAULT_LABEL}
        </Button>
    );
};

export default SubmitFormButton;
