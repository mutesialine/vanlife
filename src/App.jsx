import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HostLayout, Layout } from "./components/layouts";
import { loader as vansLoader } from "./pages/van/Van";
import { action as loginAction } from "./pages/login/Login";
import { loader as loginLoader } from "./pages/login/Login";
import { loader as vanDetailLoader } from "./pages/van/VanDetail";
import { loader as hostVansLoader } from "./pages/host/HostVans";
import { loader as hostVanDetailLoader } from "./pages/host/HostVanDetail";
import Error from "./components/Error";
import {
  Home,
  About,
  Van,
  VanDetail,
  Income,
  Reviews,
  HostVans,
  HostVanDetail,
  HostVanInfo,
  HostVanPricing,
  HostVanPhotos,
  Dashboard,
  NotFound,
  Login,
} from "./pages";
import { requireAuth } from "./Utils";
import "./data/Server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Van />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 relative">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
