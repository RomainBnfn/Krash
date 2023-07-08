import React, { lazy, Suspense } from "react";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import AppContextProvider from "./contexts/AppContext";

const AppRoutes = lazy(() => import("./AppRoutes"));

/**
 * Main app component
 * @constructor
 */
const App = () => (
    <Suspense fallback={<SplashScreen />}>
        <AppContextProvider>
            <AppRoutes />
        </AppContextProvider>
    </Suspense>
);

export default App;
