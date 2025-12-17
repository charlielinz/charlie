import { motion } from "framer-motion";

const NavMenuIcon = ({ isOpened }) => {
  return (
    <>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          animate={isOpened ? "opened" : "closed"}
          variants={{
            closed: { d: "M 4 8 L 28 8" },
            opened: { d: "M 8 24 L 24 8" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          d="M 4 16 L 28 16"
          animate={isOpened ? "opened" : "closed"}
          variants={{
            closed: { opacity: 1 },
            opened: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="currentColor"
          strokeLinecap="round"
          animate={isOpened ? "opened" : "closed"}
          variants={{
            closed: { d: "M 4 24 L 28 24" },
            opened: { d: "M 8 8 L 24 24" },
          }}
        />
      </svg>
    </>
  );
};

export default NavMenuIcon;
