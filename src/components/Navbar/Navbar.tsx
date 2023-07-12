import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Routes } from "../../AppRoutes";
import NavLink from "./NavLink";
import { useAuth } from "../../contexts/AuthContext";
import NavbarUserDropDown from "./NavbarUserDropdown";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const { appName } = useApp();
    const { isAuthenticated } = useAuth();
    return (
        <BootstrapNavbar expand="md" bg="primary">
            <Container>
                <BootstrapNavbar.Brand as={Link} to={Routes.home}>
                    {appName}
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink
                            name={t("HOME.TITLE")}
                            path={Routes.home}
                            show={isAuthenticated}
                        />{" "}
                        <NavLink
                            name={t("ADMINISTRATION.TITLE")}
                            path={Routes.administration}
                            show={isAuthenticated}
                        />
                        <NavLink
                            name={t("LOGIN.TITLE")}
                            path={Routes.login}
                            show={!isAuthenticated}
                        />
                    </Nav>
                    <NavbarUserDropDown />
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
