import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
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
      <div className="mt-8 flex items-center h-16">
        <div className="text-gray-800 text-2xl font-bold mr-10">
          <Link href="/">Charlie Lin</Link>
        </div>
        <ul className="text-gray-400 font-semibold flex items-end gap-10">
          <li className={classNameByPath("/about")}>
            <Link href="/about">About</Link>
          </li>
          <li className={classNameByPath("/travel")}>
            <Link href="/travel/posts">Travel</Link>
          </li>
          <li className={classNameByPath("/food")}>
            <Link href="/food/posts">Food</Link>
          </li>
          <li className={classNameByPath("/recitals")}>
            <Link href="/recitals">Recitals</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
