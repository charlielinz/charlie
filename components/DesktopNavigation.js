import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavigation = () => {
  const router = useRouter();
  const classNameByPath = (path) => {
    if (router.asPath.startsWith(path)) {
      return "transition duration-200 hover:text-gray-700 text-gray-700";
    } else {
      return "transition duration-200 hover:text-gray-700 text-gray-500";
    }
  };
  return (
    <>
      <ul className="text-gray-400 font-semibold flex items-end gap-6 lg:gap-10">
        <li className={classNameByPath("/about")}>
          <Link href="/about">About</Link>
        </li>
        <li className={classNameByPath("/travel")}>
          <Link href="/travel/posts">Travel</Link>
        </li>
        <li className={classNameByPath("/food")}>
          <Link href="/food/posts">Food</Link>
        </li>
        <li className={classNameByPath("/recital")}>
          <Link href="/recital">Recital</Link>
        </li>
      </ul>
      <ul className="fa-ul flex ml-auto translate-x-8">
        <li className="fa-li">
          <a
            href="https://www.facebook.com/profile.php?id=100000764741703"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-facebook-square text-3xl opacity-70 h-10 w-10"
          ></a>
        </li>
        <li className="fa-li">
          <a
            href="https://line.me/ti/p/uReKXCIUDz"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-line text-3xl opacity-70 h-10 w-10"
          ></a>
        </li>
        <li className="fa-li">
          <a
            href="https://www.instagram.com/eilrahc.c_/"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-instagram-square text-3xl opacity-70 h-10 w-10"
          ></a>
        </li>
        <li className="fa-li">
          <a
            href="https://www.linkedin.com/in/charlie-lin-0a424b117/"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-linkedin text-3xl opacity-70 h-10 w-10"
          ></a>
        </li>
        <li className="fa-li">
          <a
            href="https://github.com/charlielinz"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-github-square text-3xl opacity-70 h-10 w-10"
          ></a>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavigation;
