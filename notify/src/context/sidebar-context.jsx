import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();
const useSidebarConext = () => useContext(SidebarContext);
const SidebarContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
export { useSidebarConext, SidebarContextProvider };
