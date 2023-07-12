import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Routes } from "../../AppRoutes";
import NavLink from "./NavLink";
import { useAuth } from "../../contexts/AuthContext";
import NavbarUserDropDown from "./NavbarUserDropdown";
import "./Navbar.scss";

const Navbar = () => {
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
                            name={"Accueil"}
                            path={Routes.home}
                            show={isAuthenticated}
                        />{" "}
                        <NavLink
                            name={"Administration"}
                            path={Routes.administration}
                            show={isAuthenticated}
                        />
                        <NavLink
                            name={"Connexion"}
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
