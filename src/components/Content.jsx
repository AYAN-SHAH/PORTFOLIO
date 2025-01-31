import Link from "next/link";
import React from "react";

export default function Content() {
  return (
    <div className="bg-[#1C1C1C] py-8 px-4  md:px-12 h-full w-full flex flex-col justify-end">
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items- flex-col">
      <div className="flex shrink-0 gap-20">
        <div className="flex flex-col gap-2 text-[#F3F4F6] mb-2">
          <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/work">
            <p>Work</p>
          </Link>
          <Link href="/contact">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <hr className="w-full bg-white h- " />
      <div className="flex items-end justify-between text-[#F3F4F6]">
        <h1 className=" text-3xl md:text-[8vw] leading-[0.8] mt-10">
          LET'S CONNECT
        </h1>
        <p>©copyright</p>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
