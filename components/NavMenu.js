import { motion } from "framer-motion";
import Link from "next/link";

const NavMenu = ({ setIsOpened }) => {
  return (
    <motion.div
      className="fixed bg-gray-50 top-4 right-4"
      onClick={setIsOpened((prevState) => !prevState)}
      variants={{
        closed: {
          width: 0,
          height: 0,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
        opened: {
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 30,
          },
        },
      }}
    >
      <motion.div
        className="pl-10 pt-20"
        variants={{
          closed: {
            display: "none",
          },
          opened: {
            display: "inline-block",
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-xl">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl">
            <Link href="/travel/posts">Travel</Link>
          </li>
          <li className="text-xl">
            <Link href="/food/posts">Food</Link>
          </li>
          <li className="text-xl">
            <Link href="/recitals">Recitals</Link>
          </li>
          <ul className="fa-ul flex gap-2 mt-2 -translate-x-3">
            <li className="fa-li">
              <a
                href="https://www.facebook.com/profile.php?id=100000764741703"
                target="_blank"
                rel="noreferrer"
                className="fa-brands fa-facebook-square text-3xl opacity-70"
              ></a>
            </li>
            <li className="fa-li">
              <a
                href="https://line.me/ti/p/uReKXCIUDz"
                target="_blank"
                rel="noreferrer"
                className="fa-brands fa-line text-3xl opacity-70"
              ></a>
            </li>
            <li className="fa-li">
              <a
                href="https://www.instagram.com/eilrahc.c_/"
                target="_blank"
                rel="noreferrer"
                className="fa-brands fa-instagram-square text-3xl opacity-70"
              ></a>
            </li>
            <li className="fa-li">
              <a
                href="https://www.linkedin.com/in/charlie-lin-0a424b117/"
                target="_blank"
                rel="noreferrer"
                className="fa-brands fa-linkedin text-3xl opacity-70"
              ></a>
            </li>
            <li className="fa-li">
              <a
                href="https://github.com/charlielinz"
                target="_blank"
                rel="noreferrer"
                className="fa-brands fa-github-square text-3xl opacity-70"
              ></a>
            </li>
          </ul>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default NavMenu;
