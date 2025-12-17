import Image from "next/image";
import Link from "next/link";
import { travelPhotos } from "../../data/home";

const TravelSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-8 w-full py-6 md:py-16 max-w-screen-xl mx-auto">
        <div className="mx-6 md:mr-24 md:mt-4 md:mb-24">
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 md:gap-8">
            <div className="transform duration-200 md:hover:scale-110 md:-rotate-6 overflow-visible">
              <Image className="rounded-xl" src={travelPhotos[0].src} alt={travelPhotos[0].alt} />
            </div>
            <div className="col-start-3 transform duration-200 md:hover:scale-110 md:rotate-6 md:translate-x-6 md:translate-y-18">
              <Image className="rounded-xl" src={travelPhotos[1].src} alt={travelPhotos[1].alt} />
            </div>
            <div className="transform duration-200 md:hover:scale-110 md:translate-y-11">
              <Image className="rounded-xl" src={travelPhotos[2].src} alt={travelPhotos[2].alt} />
            </div>
            <div className="transform duration-200 md:hover:scale-110 md:translate-y-20">
              <Image className="rounded-xl" src={travelPhotos[3].src} alt={travelPhotos[3].alt} />
            </div>
            <div className="row-start-1 col-start-2 col-span-2 transform duration-200 md:hover:scale-110 md:translate-x-14 md:translate-y-4">
              <Image className="rounded-xl" src={travelPhotos[4].src} alt={travelPhotos[4].alt} />
            </div>
          </div>
        </div>
        <div className="flex flex-col min-w-[45%] bg-slate-900 rounded-l-3xl py-16 px-6 ml-6 md:ml-0 md:mr-6">
          <i className="fa-solid fa-plane pb-4 text-amber-500 text-xl"></i>
          <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
            In-depth travel & private tour guide.
          </p>
          <p className="text-gray-400">
            Close to the local and discover those places you may miss. Find and
            establish your own travel style.
          </p>
          <button className="max-w-fit md:mt-auto mt-6 bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 rounded-full py-2 px-4 md:px-6 hover:to-amber-300 hover:text-slate-800">
            <Link
              href="/travel/posts"
              className="flex items-center gap-2 text-lg md:text-xl font-black"
            >
              <span>Watch more</span>
              <i className="fa-solid fa-angle-right" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
