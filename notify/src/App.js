import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { Archivepage } from "./pages/ArchivePage/ArchivePage";
import { TrashPage } from "./pages/TrashPage/TrashPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<Archivepage />} />
        <Route path="/trash" element={<TrashPage />} />
      </Routes>
    </div>
  );
}

export default App;
