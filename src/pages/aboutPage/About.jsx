const About = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-x-6 py-16 gap-y-4 px-12">
      <img
        src="/images/image 54.webp"
        className=" w-full object-cover"
        alt="our mission"
      />
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="text-lg">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="bg-orange-400 space-y-4 py-6 px-6 w-1/2 md:w-[80%] mt-12">
          <p className="text-2xl font-bold">
            Your destination is waiting. Your van is ready.
          </p>
          <button className="bg-black p-3 text-white rounded-md">
            Explore our Vans
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
