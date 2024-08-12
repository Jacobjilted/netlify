"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "../components/brain";
import "../styles/index.css";
import { useRef } from "react";

const Aboutpage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTIANER */}
      <div className="h-full w-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TEXT */}
            <h2 className="font-bold text-2xl">BIOGRAPHY</h2>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Hi! I&apos; am Junaid Akram, a full-stack developer with seven
              years of expertise in creating dynamic and scalable web
              applications. I Excel in delivering innovative solutions by
              combining technical acumen with a commitment to excellence.In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </p>
            {/* BIOGRAPHY TAGLINE */}
            <span className="italic">
              I&apos; m proficient in a wide array of technologies.
            </span>
            {/* BIOGRAPHY SIGNATURE */}
            <div className="animated-icon"></div>
            <div className="self-end">
              <Image
                src="/signature.png"
                alt=""
                width={150}
                height={40}
              ></Image>
            </div>

            {/* BIOGRAPHY SVG */}
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              <h2 className="font-bold text-2xl">SKILLS</h2>
            </div>
            {/* SKILLS LIST */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Javascript
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Next Js
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Php
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Css 3
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Html 5
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Node Js
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Shopify
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Angular
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Ruby
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Wordpress
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Liquid
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Next Js
              </div>
              <div className="rounded bg-black text-white p-2 cursor-pointer text-sm hover:bg-white hover:text-black">
                Mongo DB
              </div>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col gap-12 justify-center pb-48">
              <h2 className="font-bold text-2xl">EXPERIENCE</h2>
              {/* EXPERENCE LIST */}
              <div className="">
                {/* EXPERENCE LIST ITEM*/}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Full Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sm font-semibold text-red-400">
                      2024 - Present
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                      NESL IT
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute rounded-full w-5 h-5 bg-white ring-4 ring-red-400 -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3"></div>
                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute rounded-full w-5 h-5 bg-white ring-4 ring-red-400 -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Full Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sm font-semibold text-red-400">
                      2022 - 2023
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                      MEGA CITY
                    </div>
                  </div>
                </div>
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Full Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sm font-semibold text-red-400">
                      2021 - 2022
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                      JAHAN DEVELOPERS
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute rounded-full w-5 h-5 bg-white ring-4 ring-red-400 -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3"></div>
                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute rounded-full w-5 h-5 bg-white ring-4 ring-red-400 -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Full Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sm font-semibold text-red-400">
                      2019 - 2021
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                      ACCRUAL HUB
                    </div>
                  </div>
                </div>
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Full Stack Developer
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document.
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-sm font-semibold text-red-400">
                      2018 - 2019
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 bg-white rounded text-sm font-semibold w-fit">
                      MEDIA HUT
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute rounded-full w-5 h-5 bg-white ring-4 ring-red-400 -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
