import Link from "next/link";
import { useRouter } from "next/router";

const DesktopNavigation = () => {
  const router = useRouter();
  const classNameByPath = (path) => {
    if (router.asPath.startsWith(path)) {
      return "transition duration-200 hover:text-slate-700 text-slate-700";
    } else {
      return "transition duration-200 hover:text-slate-700 text-slate-500";
    }
  };
  return (
    <>
      <ul className="flex items-end gap-10 font-semibold text-slate-500">
        <li className={classNameByPath("/about")}>
          <Link href="/about">About</Link>
        </li>
        <li className={classNameByPath("/food")}>
          <Link href="/food/posts">Food</Link>
        </li>
        <li className={classNameByPath("/travel")}>
          <Link href="/travel/posts">Travel</Link>
        </li>
        <li className={classNameByPath("/recital")}>
          <Link href="/recital">Recital</Link>
        </li>
      </ul>
      <ul className="ml-auto flex gap-2">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100000764741703"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-facebook-square text-3xl opacity-70 hover:opacity-90"
          ></a>
        </li>
        <li>
          <a
            href="https://line.me/ti/p/uReKXCIUDz"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-line text-3xl opacity-70 hover:opacity-90"
          ></a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/eilrahc.c_/"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-instagram-square text-3xl opacity-70 hover:opacity-90"
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/charlie-lin-0a424b117/"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-linkedin text-3xl opacity-70 hover:opacity-90"
          ></a>
        </li>
        <li>
          <a
            href="https://github.com/charlielinz"
            target="_blank"
            rel="noreferrer"
            className="fa-brands fa-github-square text-3xl opacity-70 hover:opacity-90"
          ></a>
        </li>
      </ul>
    </>
  );
};

export default DesktopNavigation;
