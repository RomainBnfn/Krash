import React, {useState} from "react";
import {Button, CardGroup} from "react-bootstrap";
import "./KrashCards.scss";
import {useUserOverview} from "../../../../contexts/UserOverviewContext";
import KrashCard from "./KrashCard";
import {useTranslation} from "react-i18next";
import {LightKrashModel} from "../../../../models/krash/lightKrash.model";
import CreateOrUpdateKrashDialog from "../../Dialogs/CreateOrUpdateKrashDialog";

/**
 *
 * @constructor
 */
const KrashCards = () => {
    const { t } = useTranslation();
    const { userOverview } = useUserOverview();
    const [editingKrash, setEditingKrash] = useState<
        Partial<LightKrashModel> | undefined
    >();
    if (!userOverview.krashes) {
        return <></>;
    }
    return (
        <div className={"KrashCards"}>
            <div className={"KrashCards-title"}>
                <h3>{t("HOME.KRASHES.TITLE")}</h3>
                <Button
                    onClick={() => {
                        setEditingKrash({});
                    }}
                >
                    {t("HOME.KRASHES.CREATE")}
                </Button>
            </div>
            <CardGroup className={"KrashCards-cards"}>
                {Object.values(userOverview.krashes).map((krash) => (
                    <KrashCard
                        key={krash.uuid}
                        krash={krash}
                        onEdit={setEditingKrash}
                    />
                ))}
            </CardGroup>
            <CreateOrUpdateKrashDialog
                editingKrash={editingKrash}
                onClose={() => {
                    setEditingKrash(undefined);
                }}
            />
        </div>
    );
};

export default KrashCards;
