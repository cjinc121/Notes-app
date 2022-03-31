import "./App.css";
import { Header } from "./component/header/header.jsx";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
