import Link from "next/link";

const MobileNavigation = ({ isOpened, setIsOpened }) => {
  return (
    <nav className="relative">
      <button
        aria-hidden
        className={
          isOpened
            ? "relative fas fa-stream text-2xl z-40 px-4 py-4 -mr-2 rounded-md transition duration-500"
            : "relative fas fa-stream text-2xl px-4 py-4 -mr-2 transition duration-500"
        }
        onClick={() => {
          setIsOpened((prevState) => !prevState);
        }}
      />
      <div
        className={
          isOpened
            ? "fixed z-30 py-6 pl-6 right-4 -translate-y-16 w-72 bg-gray-50 rounded-md transition duration-500"
            : "invisible w-0 h-0 right-4 -translate-y-16 bg-gray-50 rounded-md transition duration-500"
        }
      >
        {isOpened ? (
          <div>
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
            </ul>
            <ul className="fa-ul flex gap-2 mt-4 -translate-x-2">
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
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          isOpened
            ? "fixed w-full h-full z-20 top-0 bottom-0 left-0 right-0 bg-black opacity-60 transition duration-300"
            : "invisible transition duration-300"
        }
        onClick={() => {
          setIsOpened((prevState) => !prevState);
        }}
      ></div>
    </nav>
  );
};

export default MobileNavigation;
