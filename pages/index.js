import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <header>
      <Navbar />
      <div className="relative z-10 pt-32 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        <HeroBanner />
      </div>
      <div className="absolute top-24 md:top-28 lg:top-32 w-full h-96 bg-gray-300" />
    </header>
  );
}
