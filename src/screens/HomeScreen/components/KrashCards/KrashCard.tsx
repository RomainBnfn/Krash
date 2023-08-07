import React from "react";
import { LightKrashModel } from "../../../../models/krash/lightKrash.model";
import { Button, Card } from "react-bootstrap";
import {
    faEye as fasEye,
    faPen as fasPen,
    faRightFromBracket as fasRightFromBracket,
    faTrash as fasTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../../../contexts/AuthContext";
import KrashService from "../../../../services/krashService";

interface KrashCardProps {
    krash: LightKrashModel;

    onEdit(krash: LightKrashModel): void;
}

const KrashCard = ({ krash, onEdit }: KrashCardProps) => {
    const { uuid, name, logo, admin, description } = krash;
    const { user } = useAuth();
    const isAdminOfKrash = user?.uid === admin?.uid;
    const deleteHandle = () => {
        KrashService.deleteKrash(uuid);
    };

    return (
        <Card className={"KrashCard"}>
            <Card.Img variant="top" src={logo} alt="Krash group logo" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Body>{description}</Card.Body>
                <Card.Footer className={"KrashCard-footer"}>
                    <Button variant="primary">
                        <FontAwesomeIcon icon={fasEye} />
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            onEdit(krash);
                        }}
                    >
                        <FontAwesomeIcon icon={fasPen} />
                    </Button>
                    {isAdminOfKrash && (
                        <Button variant="danger" onClick={deleteHandle}>
                            <FontAwesomeIcon icon={fasTrash} />
                        </Button>
                    )}
                    {!isAdminOfKrash && (
                        <Button variant="danger">
                            <FontAwesomeIcon icon={fasRightFromBracket} />
                        </Button>
                    )}
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default KrashCard;
