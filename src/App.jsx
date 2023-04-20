import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/layouts";
import { Home, About, Van, VanDetail } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Van />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
