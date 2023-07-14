import { createContext, useContext, useState } from "react";
import data from '../pages/data.json'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [dataJson, setDataJson] = useState(data)
    const [user, setUser] = useState(null)

    console.log(dataJson);

    return (
        <AppContext.Provider value={
            {
                dataJson,
                setDataJson,
                user,
                setUser
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
export const useData = () => {
    return useContext(AppContext);
}