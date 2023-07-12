import React from "react";
import {Container, Navbar as BootstrapNavbar} from "react-bootstrap";
import "./Navbar.scss";

/**
 * This fake navbar can be used during loading screens
 * @constructor
 */
const FakeNavbar = () => {
    return (
        <BootstrapNavbar expand="md" bg="primary">
            <Container>
                <BootstrapNavbar.Brand className={"FakeNavbar-brand"}>
                    <div className={"FakeNavbar-brand-icon"} />
                </BootstrapNavbar.Brand>
            </Container>
        </BootstrapNavbar>
    );
};

export default FakeNavbar;
