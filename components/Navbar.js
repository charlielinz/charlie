import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const windowWidth = useWindowWidth();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-50 opacity-90">
      <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        <div className="mt-8 flex items-center h-16 gap-10">
          <div className=" text-slate-700 text-2xl font-bold">
            <Link href="/">Charlie Lin</Link>
          </div>
          {windowWidth > 768 ? (
            <DesktopNavigation />
          ) : (
            <div className="ml-auto">
              <MobileNavigation isOpened={isOpened} setIsOpened={setIsOpened} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
