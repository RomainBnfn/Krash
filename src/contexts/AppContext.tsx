import { createContext, ReactNode, useContext, useMemo } from "react";
import { AuthContextProvider } from "./AuthContext";
import { ToastContextProvider } from "./ToastContext";
import { UserOverviewContextProvider } from "./UserOverviewContext";

interface AppContextValues {
    appName: string;
}

export const AppContext = createContext<AppContextValues>({
    appName: "",
});

export const useApp = () => useContext(AppContext);

const AppContextProvider = (props: { children?: ReactNode }) => {
    const values = useMemo(
        (): AppContextValues => ({
            appName: "Krash",
        }),
        [],
    );
    return (
        <ToastContextProvider>
            <AuthContextProvider>
                <AppContext.Provider value={values}>
                    <UserOverviewContextProvider>
                        {props.children}
                    </UserOverviewContextProvider>
                </AppContext.Provider>
            </AuthContextProvider>
        </ToastContextProvider>
    );
};

export default AppContextProvider;
