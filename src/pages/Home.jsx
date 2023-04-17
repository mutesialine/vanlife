import Footer from "../components/layouts/Footer";
import NavBar from "../components/layouts/NavBar";
import Hero from "../components/sections/home/Hero";

const Home = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
