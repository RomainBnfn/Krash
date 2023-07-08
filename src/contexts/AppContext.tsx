import { createContext, ReactNode, useContext } from "react";

interface AppContextValues {}

const AppContext = createContext<AppContextValues>({});

export const useApp = () => useContext(AppContext);

const AppContextProvider = (props: { children?: ReactNode }) => {
    return (
        <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>
    );
};

export default AppContextProvider;
