import Link from "next/link";
import useWindowWidth from "../hooks/useWindowWidth";

const Footer = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="bg-gray-100 py-8">
      <div className="flex justify-between max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-6 md:mx-auto">
        <div className="flex flex-col w-full md:w-auto items-center md:items-start">
          <p className="text-2xl text-gray-700 py-4">Charlie Lin</p>
          <p className="text-sm text-gray-700">Thanks for reading!</p>
          <p className="text-sm text-gray-500 mt-16">
            &copy; 2022 Charlie Lin. All Rights Reserved.
          </p>
        </div>
        {windowWidth > 768 ? (
          <div className="flex text-sm md:gap-24 lg:gap-32">
            <div>
              <p className="text-gray-500 pt-4 pb-6">Links</p>
              <ul className="flex flex-col gap-2 text-sm">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/travel/posts">Travel</Link>
                </li>
                <li>
                  <Link href="/food/posts">Food</Link>
                </li>
                <li>
                  <Link href="/recital">Recital</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-500 pt-4 pb-6">Contact me</p>
              <ul className="grid grid-rows-4 grid-flow-col gap-2 text-sm">
                <li className="md:w-24 lg:w-28">
                  <Link href="https://www.facebook.com/profile.php?id=100000764741703">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="https://line.me/ti/p/uReKXCIUDz">Line</Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/eilrahc.c_/">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/charlie-lin-0a424b117/">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/charlielinz">Github</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Footer;
