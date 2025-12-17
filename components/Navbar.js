import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const windowWidth = useWindowWidth();

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-stone-200 transition-colors duration-300"
    >
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">
            Charlie Lin
          </span>
        </Link>

        {windowWidth > 768 ? (
          <DesktopNavigation />
        ) : (
          <MobileNavigation />
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
