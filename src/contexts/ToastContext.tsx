import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { ChildrenProps } from "../models/childrenProps";
import AppToastContainer from "../components/Toasts/AppToastContainer";
import { ToastModel } from "../models/toast.model";
import AppToast from "../components/Toasts/AppToast";
import { useTranslation } from "react-i18next";

interface ToastContextModel {
    toasts: ToastModel[];

    addToast(toast: ToastModel): void;

    removeToast(toastId: string): void;
}

export const ToastContext = createContext<ToastContextModel>({
    toasts: [],
    addToast() {},
    removeToast() {},
});

export const useToast = () => {
    const { t } = useTranslation();
    const { toasts, addToast } = useContext(ToastContext);

    /**
     * Display a toast into app toast container
     * @param type
     * @param autohide
     * @param toast
     */
    const displayToast = ({
        type = "success",
        autohide = true,
        ...toast
    }: Omit<ToastModel, "id">) => {
        const id = `toast-${toasts.map((t) => t.id).join("")}`;
        addToast({
            id: id,
            type,
            autohide,
            ...toast,
        });
    };

    /**
     * Display an error toast that auto hide few minutes after
     * @param toast
     */
    const displayErrorToast = (
        toast: Omit<ToastModel, "id" | "type" | "autohide" | "header">,
    ) => {
        displayToast({
            header: t("ERRORS.TOAST_TITLE"),
            type: "error",
            ...toast,
        });
    };

    return {
        displayToast,
        displayErrorToast,
    };
};

export const ToastContextProvider = ({ children }: ChildrenProps) => {
    const [toasts, setToasts] = useState<ToastModel[]>([]);

    /**
     * Add a toast to displayed toast list
     * @param toast
     */
    const addToast = useCallback(
        (toast: ToastModel) => {
            setToasts([...toasts, toast]);
        },
        [toasts],
    );

    /**
     * Remove all toasts with this id from the list
     */
    const removeToast = useCallback(
        (toastId: string) => {
            setToasts(toasts.filter((t) => t.id !== toastId));
        },
        [toasts],
    );

    const values = useMemo(
        (): ToastContextModel => ({
            toasts,
            addToast,
            removeToast,
        }),
        [toasts, addToast, removeToast],
    );
    return (
        <ToastContext.Provider value={values}>
            <AppToastContainer>
                {toasts.map((props) => (
                    <AppToast {...props} key={props.id} />
                ))}
            </AppToastContainer>
            {children}
        </ToastContext.Provider>
    );
};
