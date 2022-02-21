import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import DesktopNavigation from "./DesktopNavigation";

const Navbar = () => {
  const windowWidth = useWindowWidth();

  return (
    <>
      <div className="mt-8 flex items-center h-16 gap-10">
        <div className="text-gray-800 text-2xl font-bold">
          <Link href="/">Charlie Lin</Link>
        </div>
        <DesktopNavigation />
      </div>
    </>
  );
};

export default Navbar;
