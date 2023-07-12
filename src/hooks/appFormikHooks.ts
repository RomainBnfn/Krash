import {useFormikContext} from "formik";
import React from "react";

/**
 * This hook provide shortcut functions to use formik easier
 * It must be called inside a formik component wrapper
 */
export const useAppFormik = () => {
    const { submitForm } = useFormikContext();
    
    /**
     * Submit the form is the pressed key is "enter"
     * @param event
     */
    const submitOnEnterKeyPress = async (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            await submitForm();
        }
    };

    return {
        submitOnEnterKeyPress,
    };
};
