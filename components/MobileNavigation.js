import { motion } from "framer-motion";
import { useState } from "react";
import NavMenuIcon from "./NavMenuIcon";
import NavMenu from "./NavMenu";

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <motion.nav initial={false} animate={isOpened ? "opened" : "closed"}>
      <button
        className="relative pt-4 z-10"
        onClick={() => {
          setIsOpened((prevState) => !prevState);
        }}
      >
        <NavMenuIcon />
      </button>
      <NavMenu setIsOpened={setIsOpened} />
    </motion.nav>
  );
};

export default MobileNavigation;
