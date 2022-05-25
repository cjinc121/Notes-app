import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
const useSidebarConext = () => useContext(SidebarContext);
const SidebarContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [theme, SetTheme] = useState("theme-1");
  return (
    <SidebarContext.Provider
      value={{ showSidebar, setShowSidebar, theme, SetTheme }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
export { useSidebarConext, SidebarContextProvider };
