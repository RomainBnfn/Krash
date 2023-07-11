import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Routes } from "../../AppRoutes";
import NavLink from "./NavLink";

const Navbar = () => {
    const { appName } = useApp();
    return (
        <BootstrapNavbar expand="md" bg="primary">
            <Container>
                <BootstrapNavbar.Brand as={Link} to={Routes.home}>
                    {appName}
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink name={"Accueil"} path={Routes.home} />
                        <NavLink name={"Connexion"} path={Routes.login} />
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
