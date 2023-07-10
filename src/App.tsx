import React, { lazy, Suspense } from "react";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import AppContextProvider from "./contexts/AppContext";

const AppRoutes = lazy(() => import("./AppRoutes"));

/**
 * Main app component
 * @constructor
 */
const App = () => (
    <AppContextProvider>
        <Suspense fallback={<SplashScreen />}>
            <AppRoutes />
        </Suspense>
    </AppContextProvider>
);

export default App;
