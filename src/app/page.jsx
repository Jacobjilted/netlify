"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Homepage = () => {
  return (
    <div className="h-[calc(100vh-6rem)]">
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image
              src="/Programming-pana.svg"
              alt=""
              fill
              className="object-contain"
            ></Image>
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-bold">
              Passionate full-stack developer.
            </h2>
            {/* DESCRIPTION */}
            <p className="md:text-xl">
              Hi! I'm Junaid Akram, a full-stack developer with seven years of
              expertise in creating dynamic and scalable web applications. I'm
              proficient in a wide array of technologies. I Excel in delivering
              innovative solutions by combining technical acumen with a
              commitment to excellence.
            </p>
            <div className="w-full flex gap-4">
              <button className="p-4 rounded ring-1 ring-black bg-black text-white">
                View My Work
              </button>
              <button className="p-4 rounded ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
