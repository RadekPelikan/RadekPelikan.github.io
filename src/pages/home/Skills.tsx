import React from 'react'
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

const Skills = () => {
    return (
       <>
       
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
       </>
    )
}

export default Skills
