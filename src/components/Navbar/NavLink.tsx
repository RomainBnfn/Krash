import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Route } from "../../AppRoutes";

export interface NavLinkProps {
    path: Route;
    name: string;
    show?: boolean;
}

/**
 * Nav link btn
 * @param name
 * @param path
 * @param show
 * @constructor
 */
const NavLink = ({ name, path, show = true }: NavLinkProps) => {
    const { pathname } = useLocation();
    if (!show) {
        return <></>;
    }
    return (
        <Nav.Link as={Link} to={path} active={pathname === path}>
            {name}
        </Nav.Link>
    );
};

export default NavLink;
