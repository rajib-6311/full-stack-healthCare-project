import { createContext, useContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// ✅ Create context properly
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };

  return (
    // ✅ Use AppContext.Provider (capital P)
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// ✅ If you want a custom hook for easy usage
export const useAppContext = () => useContext(AppContext);
