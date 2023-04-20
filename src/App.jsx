import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HostLayout, Layout } from "./components/layouts";
import { Home, About, Van, VanDetail } from "./pages";
import { Dashboard, Income, Reviews } from "./pages/Host";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] relative">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Van />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route path="host" element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
