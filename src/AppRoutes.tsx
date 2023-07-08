import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import LoadingScreen from "./screens/loadingScreen/LoadingScreen";

const HomeScreen = lazy(() => import("./screens/homeScreen/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/loginScreen/LoginScreen"));
const RegisterScreen = lazy(
    () => import("./screens/registerScreen/RegisterScreen"),
);
const Error404Screen = lazy(
    () => import("./screens/error404Screen/error404Screen"),
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/login",
        element: <LoginScreen />,
    },
    {
        path: "/register",
        element: <RegisterScreen />,
    },
    {
        path: "*",
        element: <Error404Screen />,
    },
]);

/**
 * Component that provide app routes
 */
const AppRoutes = () => {
    return (
        <RouterProvider router={router} fallbackElement={<LoadingScreen />} />
    );
};

export default AppRoutes;
