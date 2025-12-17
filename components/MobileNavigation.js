import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavMenuIcon from "./NavMenuIcon";
import NavMenu from "./NavMenu";

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpened]);

  return (
    <>
      <button
        className="relative z-50 p-2 -mr-2 text-stone-900 hover:text-amber-600 transition-colors"
        onClick={() => setIsOpened(!isOpened)}
        aria-label="Toggle Menu"
      >
        <NavMenuIcon isOpened={isOpened} />
      </button>
      
      <AnimatePresence>
        {isOpened && <NavMenu key="nav-menu" />}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
