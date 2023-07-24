import React from "react";
import FormField from "../../../components/Forms/FormField/FormField";
import FormImageField from "../../../components/Forms/FormField/FormImageField";
import { useTranslation } from "react-i18next";

const CreateOrUpdateKrashFormContent = () => {
    const { t } = useTranslation();
    return (
        <div>
            <FormField name={"name"} label={t("COMMON.NAME")} />
            <FormField name={"description"} label={t("COMMON.DESCRIPTION")} />
            <FormImageField
                name={"logo"}
                accept="image/png, image/jpeg"
                label={t("HOME.KRASHES.MODAL.LOGO")}
            />
        </div>
    );
};

export default CreateOrUpdateKrashFormContent;
