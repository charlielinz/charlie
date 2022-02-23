import { motion } from "framer-motion";

const NavMenuIcon = ({ setIsOpened }) => {
  return (
    <button
      className="relative pt-4 z-10"
      onClick={() => {
        setIsOpened((prevState) => !prevState);
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            opened: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            opened: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <motion.path
          fill="transparent"
          strokeWidth="3"
          stroke="hsl(0, 0%, 18%)"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            opened: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default NavMenuIcon;
