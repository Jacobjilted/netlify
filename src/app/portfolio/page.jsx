"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    // color: "from-violet-300 to-purple-300",
    // title: "LinkedIn",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    imageSrc: "/p1.jpg",
    link: "https://www.pexels.com/",
  },
  {
    id: 2,
    // color: "from-purple-300 to-violet-300",
    // title: "LinkedIn",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    imageSrc: "/p2.jpg",
    link: "https://www.pexels.com/",
  },
  {
    id: 3,
    // color: "from-blue-300 to-violet-300",
    // title: "LinkedIn",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    imageSrc: "/p3.jpg",
    link: "https://www.pexels.com/",
  },
  {
    id: 4,
    // color: "from-purple-300 to-red-300",
    // title: "LinkedIn",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    imageSrc: "/p4.jpg",
    link: "https://www.pexels.com/",
  },
  {
    id: 5,
    // color: "from-red-300 to-violet-300",
    // title: "LinkedIn",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
    imageSrc: "/p1.jpg",
    link: "https://www.pexels.com/",
  },
];

const Portfoliopage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Work
        </div>
        <div className="sticky top-0 flex h-screen gap-8 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center p-4 justify-center bg-gradient-to-r from-pruple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="relative w-screen h-screen">
                  <Image src={item.imageSrc} alt="" fill />
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h1 className="text-4xl mb-4">Your Overlay Text</h1>
                    <p className="text-lg lg:px-[600px] md:px-[300px] sm:px-[50px] text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl text-center">Do you have project?</h1>
        <div className="w-full flex gap-4 items-center justify-center">
          <button className="p-4 rounded ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfoliopage;
