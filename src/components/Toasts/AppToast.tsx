import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { ToastModel } from "../../models/toast.model";
import { Toast } from "react-bootstrap";
import { ToastContext } from "../../contexts/ToastContext";
import {
    faCircleCheck as farCircleCheck,
    faCircleQuestion as farCircleQuestion,
    faCircleXmark as farCircleXMark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface AppToastProps extends ToastModel {}

const AppToast = ({
    id,
    header,
    message,
    type = "success",
    autohide,
}: AppToastProps) => {
    const [show, setShow] = useState(false);
    const { removeToast } = useContext(ToastContext);
    const bg = getToastBackground(type);
    const icon = getToastIcon(type);

    // As removeToast will be called inside a setTimeout, we need a ref to access the current value
    const removeToastRef = useRef(removeToast);
    removeToastRef.current = removeToast;

    /**
     * Use effect that is trigger only during first rendering
     */
    useEffect(() => {
        // Add a little delay to allow fade in animation to play
        const to = setTimeout(() => {
            setShow(true);
        }, 100);
        return () => {
            clearTimeout(to);
        };
    }, []);

    /**
     * On close callback
     */
    const onClose = useCallback(() => {
        setShow(false);
        // Add a little delay to allow fade out animation to play
        setTimeout(() => {
            removeToastRef.current(id);
        }, 2000);
    }, [id]);

    return (
        <Toast
            className={"AppToast"}
            id={id}
            onClose={onClose}
            bg={bg}
            show={show}
            autohide={autohide}
        >
            <Toast.Header className={"AppToast-header"} key={"header"}>
                <FontAwesomeIcon
                    className={"AppToast-header-icon"}
                    icon={icon}
                />
                <strong className={"AppToast-header-title"}>{header}</strong>
            </Toast.Header>
            <Toast.Body className={"AppToast-header-body"} key={"body"}>
                {message}
            </Toast.Body>
        </Toast>
    );
};

/**
 * Get toast bootstrap variant bg
 * @param type
 */
const getToastBackground = (type: string): string => {
    switch (type) {
        case "success":
            return "success";
        case "error":
            return "danger";
        case "info":
            return "secondary";
    }
    return "";
};

/**
 * Get toast header icon
 * @param type
 */
const getToastIcon = (type: string): IconDefinition => {
    switch (type) {
        case "success":
            return farCircleCheck;
        case "error":
            return farCircleXMark;
        case "info":
            return farCircleQuestion;
    }
    return farCircleXMark;
};

export default AppToast;
