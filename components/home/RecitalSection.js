import Image from "next/image";
import Link from "next/link";
import recitalPoster from "../../public/img/index/recital-poster.jpg";
import { chamberMusic } from "../../data/home";

const RecitalSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50 mb-12">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between max-w-screen-xl mx-auto py-6">
        <span className="mx-12 my-6">
          <Image
            src={recitalPoster}
            alt="recital-poster"
            width={350}
            height={500}
          />
        </span>
        <div className="max-w-screen-md mx-6 py-16 px-6 min-w-[40%] bg-slate-900 rounded-3xl">
          <i className="fa-solid fa-music pb-4 text-amber-500 text-xl"></i>
          <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
            Approaching to classical music is way too easy.
          </p>
          <p className="text-gray-400 pb-4 md:pb-12">
            Get into the classical music scene with this guide, enjoy several
            recitals here.
          </p>
          <div className="hidden md:block">
            <p className="text-gray-50 text-2xl font-semibold py-4">
              One solo & Two chambers
            </p>
            <ul className="text-gray-400 pb-12">
              {chamberMusic.map((item, index) => (
                <li key={index} className="list-disc list-inside">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-4">
            <button className="bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 rounded-full py-2 px-4 md:px-6 hover:to-amber-300 hover:text-slate-800">
              <Link
                href="/recital"
                className="flex items-center gap-2 text-lg md:text-xl font-black"
              >
                <span>Watch more</span>
                <i className="fa-solid fa-angle-right" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecitalSection;
