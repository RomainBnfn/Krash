import React from "react";
import {NavDropdown} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";

/**
 * Nav log out btn
 * @constructor
 */
const NavLogout = () => {
    const { isAuthenticated, logout } = useAuth();
    if (!isAuthenticated) {
        return <></>;
    }
    return <NavDropdown.Item onClick={logout}>Déconnexion</NavDropdown.Item>;
};

export default NavLogout;
