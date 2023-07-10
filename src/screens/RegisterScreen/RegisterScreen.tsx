import React from "react";
import {Link} from "react-router-dom";
import {Routes} from "../../AppRoutes";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LogScreen from "../../components/LogScreen/LogScreen";

/**
 * Register screen
 * @constructor
 */
const RegisterScreen = () => {
    return (
        <LogScreen>
            <h2>Inscription</h2>
            <RegisterForm />
            <Link to={Routes.login}>Déjà inscrit ?</Link>
        </LogScreen>
    );
};

export default RegisterScreen;
