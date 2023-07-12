import React from "react";
import {Nav} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";

/**
 * Nav log out btn
 * @constructor
 */
const NavLogout = () => {
    const { logout } = useAuth();
    return <Nav.Link onClick={logout}>Déconnexion</Nav.Link>;
};

export default NavLogout;
