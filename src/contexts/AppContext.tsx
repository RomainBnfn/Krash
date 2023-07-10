import { createContext, ReactNode, useContext } from "react";
import { AuthContextProvider } from "./AuthContext";

interface AppContextValues {
    appName: string;
}

export const AppContext = createContext<AppContextValues>({
    appName: "",
});

export const useApp = () => useContext(AppContext);

const AppContextProvider = (props: { children?: ReactNode }) => {
    const values: AppContextValues = {
        appName: "Krash",
    };
    return (
        <AuthContextProvider>
            <AppContext.Provider value={values}>
                {props.children}
            </AppContext.Provider>
        </AuthContextProvider>
    );
};

export default AppContextProvider;
