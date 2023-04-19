import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./pages/Home";
import AboutVan from "./components/sections/about/AboutVan";
import Van from "./components/sections/van/Van";
import VanDetail from "./components/sections/van/VanDetail";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutVan />} />
          <Route path="/van" element={<Van />} />
          <Route path="/van/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
