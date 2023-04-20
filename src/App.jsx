import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layouts";
import { Home, About, Van, VanDetail } from "./pages";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] relative">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Van />} />
            <Route path="/vans/:id" element={<VanDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
