import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import NavLogout from "./NavLogout";

const NavbarUserDropDown = () => {
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated) {
        return <></>;
    }
    return (
        <NavDropdown title={user?.email} id="basic-nav-dropdown">
            <NavDropdown.Item>Mon compte</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavLogout />
        </NavDropdown>
    );
};

export default NavbarUserDropDown;
