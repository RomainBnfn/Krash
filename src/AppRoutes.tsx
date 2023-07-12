import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import AuthenticatedGuard from "./guards/AuthenticatedGuard";

const HomeScreen = lazy(() => import("./screens/HomeScreen/HomeScreen"));

const LoginScreen = lazy(() => import("./screens/LoginScreen/LoginScreen"));
const RegisterScreen = lazy(
    () => import("./screens/RegisterScreen/RegisterScreen"),
);
const ForgottenPasswordScreen = lazy(
    () => import("./screens/ForgottenPasswordScreen/ForgottenPasswordScreen"),
);
const Error404Screen = lazy(
    () => import("./screens/Error404Screen/Error404Screen"),
);
const AdministrationScreen = lazy(
    () => import("./screens/AdministrationScreen/AdministrationScreen"),
);

export const Routes = {
    home: "/",
    login: "/login",
    register: "/register",
    forgottenPassword: "/forgotten-password",
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
        element: (
            <AuthenticatedGuard shouldBeAuthenticated={false}>
                <LoginScreen />
            </AuthenticatedGuard>
        ),
    },
    {
        path: Routes.register,
        element: (
            <AuthenticatedGuard shouldBeAuthenticated={false}>
                <RegisterScreen />
            </AuthenticatedGuard>
        ),
    },
    {
        path: Routes.forgottenPassword,
        element: (
            <AuthenticatedGuard shouldBeAuthenticated={false}>
                <ForgottenPasswordScreen />
            </AuthenticatedGuard>
        ),
    },
    {
        path: Routes.administration,
        element: (
            <AuthenticatedGuard shouldBeAuthenticated={true}>
                <AdministrationScreen />
            </AuthenticatedGuard>
        ),
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
        <Suspense fallback={<LoadingScreen />}>
            <RouterProvider
                router={createBrowserRouter(routes)}
                fallbackElement={<LoadingScreen />}
            />
        </Suspense>
    );
};

export default AppRoutes;
