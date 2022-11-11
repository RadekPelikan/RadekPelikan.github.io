import React, { useState, useEffect } from "react";
import {
  SiTypescript
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Skills from "./Skills"

const HomePage = () => {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex gap-10 justify-between flex-col xl:flex-row">
        <div>
          <p className="text-2xl flex flex-col xl:flex-none xl:block">
            <span className="mr-5">My name is</span>
            <span className="text-4xl">Radek Pelikán</span>
          </p>
          <p className="text-xl mt-3 flex flex-col md:flex-row">
            <span>Current location:</span>
            <span>
              Czech republic
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/188px-Flag_of_the_Czech_Republic.svg.png"
                alt=""
                className="inline h-6 ml-2"
              />
            </span>
          </p>
        </div>
        <div>
          <p className="text-4xl">I'm a full stack web developer</p>
          <p className="text-3xl text-gray-800 xl:ml-5">
            mainly using
            <FaReact
              className="inline text-cyan-300 relative -inset-y-1 mx-2"
              title="Reactjs"
            />
            with
            <SiTypescript
              className="inline text-blue-700 relative -inset-y-1 mx-2"
              title="Typescript"
            />
            and
            <FaNodeJs
              className="inline text-green-700 relative -inset-y-1 mx-2"
              title="Nodejs"
            />
          </p>
          <p className="text-xl text-gray-700 mt-5 max-w-xl text-justify">
            I also know how to work in Java and Python. I've got experience in
            basics of cisco and mikrotik networking. I studied at secondary
            technical school with major in IT.
          </p>
        </div>
      </div>
      <div className="max-w-xl text-8xl whitespace-nowrap overflow-x-hidden mx-auto">
        <div className="relative sliding-show w-fit">
          <Skills/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
