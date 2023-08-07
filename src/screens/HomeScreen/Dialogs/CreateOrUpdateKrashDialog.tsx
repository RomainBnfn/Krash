import React from "react";
import { Button, Modal } from "react-bootstrap";
import { LightKrashModel } from "../../../models/krash/lightKrash.model";
import { useTranslation } from "react-i18next";
import SubmitFormButton from "../../../components/Buttons/SubmitFormButton";
import { Formik } from "formik";
import {
    KrashFormModel,
    LoginFormSchema,
} from "../../../models/forms/krashForm.model";
import CreateOrUpdateKrashFormContent from "./CreateOrUpdateKrashFormContent";
import KrashService from "../../../services/krashService";
import { useAuth } from "../../../contexts/AuthContext";

interface CreateOrUpdateKrashDialogProps {
    editingKrash: Partial<LightKrashModel> | undefined;

    onClose(): void;
}

const CreateOrUpdateKrashDialog = ({
    editingKrash,
    onClose,
}: CreateOrUpdateKrashDialogProps) => {
    const { t } = useTranslation();
    const { user } = useAuth();
    const isCreation = !editingKrash?.uuid;
    const initialValues: KrashFormModel = {
        name: editingKrash?.name ?? "",
        description: editingKrash?.description ?? "",
        logo: editingKrash?.logo ?? "",
    };
    return (
        <Modal
            show={!!editingKrash}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Formik<KrashFormModel>
                initialValues={initialValues}
                enableReinitialize
                validationSchema={LoginFormSchema}
                onSubmit={(values) => {
                    if (user) {
                        // todo hook
                        KrashService.createOrUpdateKrash(
                            {
                                uuid: editingKrash?.uuid ?? "",
                                admin: editingKrash?.admin ?? {
                                    uid: user.uid,
                                    email: user.email,
                                },
                                name: values.name,
                                logo: values.logo,
                                description: values.description,
                            },
                            user,
                        );
                    }
                    onClose();
                }}
            >
                <form>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {t(
                                `HOME.KRASHES.MODAL.${
                                    isCreation ? "CREATE_TITLE" : "EDIT_TITLE"
                                }`,
                            )}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateOrUpdateKrashFormContent />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            {t("COMMON.CANCEL")}
                        </Button>
                        <SubmitFormButton />
                    </Modal.Footer>
                </form>
            </Formik>
        </Modal>
    );
};

export default CreateOrUpdateKrashDialog;
