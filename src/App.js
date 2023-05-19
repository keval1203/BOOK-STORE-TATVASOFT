import "./App.css";
import Apple from "./components/Apple";
import Error404 from "./components/Error404";
import Sheep from "./components/Sheep";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Sheep" element={<Sheep />} />
          <Route path="Apple" element={<Apple />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
