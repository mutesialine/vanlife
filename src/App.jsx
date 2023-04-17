import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Van from "./pages/Van";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Van />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
