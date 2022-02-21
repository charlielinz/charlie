import Image from "next/image";
import me from "../public/img/me.jpg";
import Navbar from "../components/Navbar";

const abouts = () => {
  return (
    <div className="relative bg-herobanner bg-fixed bg-cover bg-center">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 h-36 -mt-36 md:max-w-screen-sm lg:max-w-screen-md mx-auto bg-black opacity-95" />
      <div className="md:max-w-screen-sm lg:max-w-screen-md mx-6 md:mx-auto">
        <div className="md:mx-0 mt-12 flex flex-col md:flex-row md:gap-6 lg:gap-10">
          <div className="relative md:w-72 lg:w-80">
            <Image src={me} ale="me" quality={100} priority={true} />
          </div>
          <div className="text-gray-300 font-extralight mt-4 md:mt-0">
            <p className="text-xl md:text-2xl font-thin">Charlie Lin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default abouts;
