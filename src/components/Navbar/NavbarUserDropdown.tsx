import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import NavLogout from "./NavLogout";
import { useTranslation } from "react-i18next";

const NavbarUserDropDown = () => {
    const { t } = useTranslation();
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated) {
        return <></>;
    }
    return (
        <NavDropdown title={user?.email} id="basic-nav-dropdown">
            <NavDropdown.Item>{t("MY_ACCOUNT.TITLE")}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavLogout />
        </NavDropdown>
    );
};

export default NavbarUserDropDown;
