import { ToastProps } from "react-bootstrap/Toast";

export interface ToastModel extends ToastProps {
    id: string;
    header: string;
    message: string;
    type?: "success" | "info" | "error";
}
