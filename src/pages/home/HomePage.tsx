import React from "react";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex gap-10 justify-between flex-col xl:flex-row">
      <div>
        <p className="text-2xl flex flex-col xl:flex-none xl:block">
          <span className="mr-5">My name is</span>
          <span className="text-4xl">Radek Pelikán</span>
        </p>
      </div>
      <div>
        <p className="text-4xl">I'm a full stack web developer</p>
        <p className="text-3xl text-gray-800 xl:ml-5">
          mainly using
          <FaReact className="inline text-cyan-300 relative -inset-y-1 mx-2" />
          with
          <SiTypescript className="inline text-blue-700 relative -inset-y-1 mx-2" />
          and
          <FaNodeJs className="inline text-green-700 relative -inset-y-1 mx-2" />
        </p>
        <p className="text-xl text-gray-700 mt-5 max-w-xl text-justify">
          I also know how to work in Java and Python. I've got experience in
          basics of cisco and mikrotik networking. I studied at secondary
          technical school with major in IT.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
