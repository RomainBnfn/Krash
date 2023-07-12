import React from "react";
import { Button } from "react-bootstrap";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

interface SubmitFormButtonProps {
    label?: String;
}

/**
 * Button that submit formik form and is disabled if the form is
 * @param label
 * @constructor
 */
const SubmitFormButton = ({ label }: SubmitFormButtonProps) => {
    const { t } = useTranslation();
    const { submitForm, errors, dirty } = useFormikContext();
    const DEFAULT_LABEL = t("FORM.BUTTONS.SUBMIT");

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
