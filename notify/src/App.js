import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { Archivepage } from "./pages/ArchivePage/ArchivePage";
import { TrashPage } from "./pages/TrashPage/TrashPage";
import { LabelPage } from "./pages/LabelPage/labelPage.jsx";
import { Login } from "./pages/LoginPage/Login";
import ProtectedRoute from "./Router/PrivateRoute";
import { SignUp } from "./pages/SignUpPage/SignUp";
import Mockman from "mockman-js";
import { LandingPage } from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/home"
          element={<ProtectedRoute navigateTo={<HomePage />}></ProtectedRoute>}
        />
        <Route
          path="/archive"
          element={
            <ProtectedRoute navigateTo={<Archivepage />}></ProtectedRoute>
          }
        />
        <Route
          path="/trash"
          element={<ProtectedRoute navigateTo={<TrashPage />}></ProtectedRoute>}
        />
        <Route
          path="/labels/:labelName"
          element={<ProtectedRoute navigateTo={<LabelPage />}></ProtectedRoute>}
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
