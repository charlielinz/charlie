import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const classNameByPath = (path) => {
    if (path === "/" && router.asPath !== "/") {
      return "transition duration-200 hover:text-white text-gray-400";
    }
    if (router.asPath.startsWith(path)) {
      return "transition duration-200 hover:text-white text-white";
    } else {
      return "transition duration-200 hover:text-white text-gray-400";
    }
  };

  return (
    <div className="h-36">
      <ul className="absolute top-20 translate-x-1/2 md:translate-x-0 right-1/2 md:right-32 lg:right-40 text-lg md:text-xl lg:text-2xl text-gray-400 flex gap-2">
        <li className={classNameByPath("/")}>
          <Link href="/">Home</Link>
        </li>
        <li>．</li>
        <li className={classNameByPath("/abouts")}>
          <Link href="/about">About</Link>
        </li>
        <li>．</li>
        <li className={classNameByPath("/blog")}>
          <Link href="/blog/posts">Blog</Link>
        </li>
        <li>．</li>
        <li className={classNameByPath("/recitals")}>
          <Link href="/recitals">Recitals</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
