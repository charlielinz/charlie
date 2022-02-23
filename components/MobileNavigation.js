import { motion } from "framer-motion";
import { useState } from "react";
import NavMenuIcon from "./NavMenuIcon";
import NavMenu from "./NavMenu";

const MenuToggle = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpened ? "opened" : "closed"}
    >
      <NavMenuIcon setIsOpened={setIsOpened} />
      <NavMenu setIsOpened={setIsOpened} />
    </motion.nav>
  );
};

export default MenuToggle;
