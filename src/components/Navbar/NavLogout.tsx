import React from "react";
import {NavDropdown} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {useTranslation} from "react-i18next";

/**
 * Nav log out btn
 * @constructor
 */
const NavLogout = () => {
    const { t } = useTranslation();
    const { isAuthenticated, logout } = useAuth();
    if (!isAuthenticated) {
        return <></>;
    }
    return (
        <NavDropdown.Item onClick={logout}>
            {t("NAVBAR.LOGOUT")}
        </NavDropdown.Item>
    );
};

export default NavLogout;
