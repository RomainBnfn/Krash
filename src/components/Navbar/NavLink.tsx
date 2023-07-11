import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Route } from "../../AppRoutes";

export interface NavLinkProps {
    path: Route;
    name: string;
}

/**
 * Nav link btn
 * @param name
 * @param path
 * @constructor
 */
const NavLink = ({ name, path }: NavLinkProps) => {
    const { pathname } = useLocation();
    return (
        <Nav.Link as={Link} to={path} active={pathname === path}>
            {name}
        </Nav.Link>
    );
};

export default NavLink;
