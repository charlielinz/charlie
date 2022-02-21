import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <header>
      <div
        className={
          isLoaded
            ? "relative w-full h-screen transition ease-out duration-2000"
            : "relative w-full h-screen transition ease-out duration-2000 blur-2xl"
        }
      >
        <HeroBanner isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        <Navbar />
      </div>
    </header>
  );
}
