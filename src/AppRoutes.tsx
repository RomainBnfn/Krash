import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";

const HomeScreen = lazy(() => import("./screens/HomeScreen/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen/LoginScreen"));
const RegisterScreen = lazy(
    () => import("./screens/RegisterScreen/RegisterScreen"),
);
const Error404Screen = lazy(
    () => import("./screens/Error404Screen/Error404Screen"),
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
