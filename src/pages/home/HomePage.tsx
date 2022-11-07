import React, { useState, useEffect } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiCisco,
  SiVite,
  SiExpress,
  SiNumpy,
  SiBulma,
  SiTailwindcss,
  SiMysql,
  SiVisualstudiocode,
  SiMicrosoftoffice,
} from "react-icons/si";
import { FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { DiJava, DiPython, DiCss3, DiDebian, DiLinux } from "react-icons/di";
import { AiFillGithub, AiFillHtml5, AiFillWindows } from "react-icons/ai";

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
          <a href="https://nodejs.org" target="_blank">
            <FaNodeJs className="inline" />
          </a>
          <a href="https://reactjs.org/" target="_blank">
            <FaReact className="inline ml-5" />
          </a>
          <a href="https://www.java.com/en/" target="_blank">
            <DiJava className="inline ml-5" />
          </a>
          <a href="https://www.python.org/" target="_blank">
            <DiPython className="inline ml-5" />
          </a>
          <a href="https://numpy.org/" target="_blank">
            <SiNumpy className="inline ml-5" />
          </a>
          <a href="https://bulma.io/" target="_blank">
            <SiBulma className="inline ml-5" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <SiTailwindcss className="inline ml-5" />
          </a>
          <a href="https://www.cisco.com/" target="_blank">
            <SiCisco className="inline ml-5" />
          </a>
          <a href="https://www.javascript.com/" target="_blank">
            <SiJavascript className="inline ml-5" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript className="inline ml-5" />
          </a>
          <a href="https://expressjs.com/" target="_blank">
            <SiExpress className="inline ml-5" />
          </a>
          <a href="https://vitejs.dev/" target="_blank">
            <SiVite className="inline ml-5" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <SiMongodb className="inline ml-5" />
          </a>
          <a href="https://www.mysql.com/" target="_blank">
            <SiMysql className="inline ml-5" />
          </a>
          <a href="https://github.com/" target="_blank">
            <AiFillGithub className="inline ml-5" />
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <FaGitAlt className="inline ml-5" />
          </a>
          <a href="https://html5.org/" target="_blank">
            <AiFillHtml5 className="inline ml-5" />
          </a>
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="_blank"
          >
            <DiCss3 className="inline ml-5" />
          </a>
          <a href="https://code.visualstudio.com/" target="_blank">
            <SiVisualstudiocode className="inline ml-5" />
          </a>
          <a href="https://www.linux.org/" target="_blank">
            <DiLinux className="inline ml-5" />
          </a>
          <a href="https://www.debian.org/" target="_blank">
            <DiDebian className="inline ml-5" />
          </a>
          <a
            href="https://www.microsoft.com/en-us/windows-server"
            target="_blank"
          >
            <AiFillWindows className="inline ml-5" />
          </a>
          <a href="https://www.office.com/" target="_blank">
            <SiMicrosoftoffice className="inline ml-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
