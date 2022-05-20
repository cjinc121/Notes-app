import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { NotesContextProvider } from "./context/notes-context";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./context/sidebar-context";
import { FilterContextProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SidebarContextProvider>
          <NotesContextProvider>
            <FilterContextProvider>
              <App />
            </FilterContextProvider>
          </NotesContextProvider>
        </SidebarContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
