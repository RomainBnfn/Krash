import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";

const HomeScreen = lazy(() => import("./screens/HomeScreen/HomeScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen/LoginScreen"));
const RegisterScreen = lazy(
    () => import("./screens/RegisterScreen/RegisterScreen"),
);
const Error404Screen = lazy(
    () => import("./screens/Error404Screen/Error404Screen"),
);

export const Routes = {
    home: "/",
    login: "/login",
    register: "/register",
    administration: "/admin",
    error404: "*",
} as const;
export type Route = (typeof Routes)[keyof typeof Routes];

const routes: (RouteObject & { path: Route })[] = [
    {
        path: Routes.home,
        element: (
            <AuthenticatedGuard>
                <HomeScreen />
            </AuthenticatedGuard>
        ),
    },
    {
        path: Routes.login,
        element: <LoginScreen />,
    },
    {
        path: Routes.register,
        element: <RegisterScreen />,
    },
    {
        path: "*",
        element: <Error404Screen />,
    },
];

/**
 * Component that provide app routes
 */
const AppRoutes = () => {
    return (
        <RouterProvider
            router={createBrowserRouter(routes)}
            fallbackElement={<LoadingScreen />}
        />
    );
};

export default AppRoutes;
