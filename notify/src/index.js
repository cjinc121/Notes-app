import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { NotesContextProvider } from "./context/notes-context";
import { BrowserRouter } from "react-router-dom";
import { SidebarContextProvider } from "./context/sidebar-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarContextProvider>
        <NotesContextProvider>
          <App />
        </NotesContextProvider>
      </SidebarContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
