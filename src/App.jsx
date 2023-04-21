import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HostLayout, Layout } from "./components/layouts";
import { Home, About, Van, VanDetail } from "./pages";
import {
  Dashboard,
  HostVanDetail,
  HostVanInfo,
  HostVanPhotos,
  HostVanPricing,
  HostVans,
  Income,
  Reviews,
} from "./pages/Host";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Van />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
