import Link from "next/link";
import { motion } from "framer-motion";
import { foodReviews } from "../../data/home";

const FoodSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-slate-100 to-gray-50">
      <div className="flex flex-col md:flex-row w-full py-6 gap-8 md:py-28 max-w-screen-xl mx-auto">
        <div className="flex flex-col min-w-[45%] bg-slate-900 rounded-r-3xl py-16 px-6 mr-6 md:mr-0 md:ml-6">
          <i className="fa-solid fa-utensils pb-4 text-amber-500 text-xl"></i>
          <p className="text-gray-50 text-4xl md:text-6xl leading-tight pb-2 font-bold">
            No more struggle with your meals.
          </p>
          <p className="text-gray-400">
            Tons of food officially review by Charlie Lin, the next Michelin.
          </p>
          <ul className="text-gray-400 py-6">
            <p className="text-gray-50 text-2xl font-semibold py-4">
              Sort & Filter features
            </p>
            <li className="list-disc list-inside">
              Sort by date, rate & price
            </li>
            <li className="list-disc list-inside">Filter by rate</li>
          </ul>
          <button className="max-w-fit md:mt-auto bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 rounded-full py-2 px-4 md:px-6 hover:to-amber-300 hover:text-slate-800">
            <Link
              href="/food/posts"
              className="flex items-center gap-2 text-lg md:text-xl font-black"
            >
              <span>Watch more</span>
              <i className="fa-solid fa-angle-right" />
            </Link>
          </button>
        </div>
        <div className="min-w-[45%] my-6 mx-6 rounded-xl shadow-lg">
          <div className="p-4 space-y-2">
            <div className="relative flex flex-col md:flex-row justify-between py-2">
              <div className="flex">
                <motion.div
                  animate={{ opacity: [1, 0, 0, 1, 1] }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.5",
                    repeat: Infinity,
                    repeatDelay: "1.5",
                    ease: "easeInOut",
                  }}
                >
                  <button className="py-1 px-5 text-lg">Sort by</button>
                  <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
                <motion.div
                  className="absolute"
                  animate={{ opacity: [0, 1, 1, 0, 0] }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.5",
                    repeat: Infinity,
                    repeatDelay: "1.5",
                    ease: "easeInOut",
                  }}
                >
                  <button className="py-1 px-5 text-lg">
                    Rate: high to low
                  </button>
                  <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
              </div>
              <div>
                <motion.div
                  className="absolute"
                  animate={{ opacity: [1, 1, 0, 0, 1] }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.8",
                    repeat: Infinity,
                    repeatDelay: "1.2",
                    ease: "easeInOut",
                  }}
                >
                  <button className="py-1 px-5 text-lg">Filter</button>
                  <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.8",
                    repeat: Infinity,
                    repeatDelay: "1.2",
                    ease: "easeInOut",
                  }}
                >
                  <button className="py-1 px-5 text-lg">Rate ≥ 8.0</button>
                  <i className="fa-solid fa-chevron-down"></i>
                </motion.div>
              </div>
            </div>
            <div className="py-2">
              <div className="p-4 border-t-2 border-t-gray-200">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{foodReviews[0].title}</p>
                    <p className="text-sm text-gray-500">{foodReviews[0].date}</p>
                    <p className="text-xl pt-2">{foodReviews[0].price}</p>
                  </div>
                  <p className="space-x-0.5 pt-1">
                    <i className="fa-solid fa-star text-lg text-amber-400" />
                    <span>{foodReviews[0].rate}</span>
                  </p>
                </div>
              </div>
              <div className="p-4 border-t-2 border-t-gray-200">
                <motion.div
                  className="flex justify-between"
                  animate={{
                    translateY: [0, 130, 130, 130, 0],
                    opacity: [1, 1, 0, 0, 1],
                  }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.8",
                    repeat: Infinity,
                    repeatDelay: "1.2",
                    ease: "easeInOut",
                  }}
                >
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{foodReviews[1].title}</p>
                    <p className="text-sm text-gray-500">{foodReviews[1].date}</p>
                    <p className="text-xl pt-2">{foodReviews[1].price}</p>
                  </div>
                  <p className="space-x-0.5 pt-1">
                    <i className="fa-solid fa-star text-lg text-amber-400" />
                    <span>{foodReviews[1].rate}</span>
                  </p>
                </motion.div>
              </div>
              <div className="p-4 border-t-2 border-t-gray-200">
                <motion.div
                  className="flex justify-between"
                  animate={{
                    translateY: [0, -130, -130, -130, 0],
                    opacity: [1, 1, 1, 1, 1],
                  }}
                  transition={{
                    times: [0, 0.25, 0.5, 0.75, 1],
                    delay: 1,
                    duration: "4.8",
                    repeat: Infinity,
                    repeatDelay: "1.2",
                    ease: "easeInOut",
                  }}
                >
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{foodReviews[2].title}</p>
                    <p className="text-sm text-gray-500">{foodReviews[2].date}</p>
                    <p className="text-xl pt-2">{foodReviews[2].price}</p>
                  </div>
                  <p className="space-x-0.5 pt-1">
                    <i className="fa-solid fa-star text-lg text-amber-400" />
                    <span>{foodReviews[2].rate}</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
