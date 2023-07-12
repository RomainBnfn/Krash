import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Routes } from "../../AppRoutes";
import NavLink from "./NavLink";
import { useAuth } from "../../contexts/AuthContext";
import NavLogout from "./NavLogout";

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
                        {isAuthenticated && (
                            <NavLink name={"Accueil"} path={Routes.home} />
                        )}
                        {!isAuthenticated && (
                            <NavLink name={"Connexion"} path={Routes.login} />
                        )}
                        {isAuthenticated && <NavLogout />}
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
