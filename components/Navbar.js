import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className="max-w-screen-xl mx-6 md:mx-auto md:px-6">
      <div className="flex items-center h-16 gap-10">
        <div className="text-slate-800 text-2xl font-bold">
          <Link href="/">Charlie Lin</Link>
        </div>
        {windowWidth > 768 ? (
          <DesktopNavigation />
        ) : (
          <div className="ml-auto">
            <MobileNavigation />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
