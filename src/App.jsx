import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
import AboutVan from "./components/sections/van/AboutVan";
import Van from "./components/sections/van/Van";
const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutVan />} />
          <Route path="/van" element={<Van />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
