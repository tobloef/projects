import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import * as images from "./images";

export type Project = {
  key: string,
  name: string,
  thumbnail: StaticImageData,
  description: ReactNode,
  date: Date,
  tags: Tag[],
};


export type Tag = {
  name: string,
  color: string,
}

export const Tags = {
  WEB: {
    name: "Web",
    color: "#FF8B00"
  },
  WORK: {
    name: "Work",
    color: "#0052CC",
  },
  PYTHON: {
    name: "Python",
    color: "#FFC400",
  },
} as const;

export type TagKey = keyof typeof Tags;

const projects: Project[] = [
  {
    key: "markant",
    name: "Markant - An online Markdown editor",
    thumbnail: images.markantThumbnail,
    tags: [
      Tags.WEB,
    ],
    date: new Date("2017-02"),
    description: <div>
      <Image
        src={images.markantExample}
        alt="Screenshot of Markant"
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/markant">Github</a>
          {" / "}
          <a href="https://tobloef.com/markant/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> Feb. 2017
        </p>
      </div>
      <p>
        Markant is a web-based Markdown editor with support for LaTeX math notation. Originally meant to suit my own needs (studying Computer Science and Mathematics), I eventually decided to polish it up for other people to use. Built with vanilla HTML, CSS and JS, with a bit of jQuery, because I at the time wanted to get away from frameworks for a little while. It uses <a href="https://github.com/codemirror/dev/">CodeMirror</a> for text-editing, <a href="https://github.com/markdown-it/markdown-it">markdown-it</a> to render Markdown as HTML and <a href="https://github.com/KaTeX/KaTeX">KaTeX</a> to render LaTeX math.
        <br />
        <br />
        <b>Key takeaways:</b> Strengthened core web development skills. Released a finished product to the public and dealt with feedback from users. Experimented with marketing for software.
      </p>
    </div>,
  },
  {
    key: "set-solver",
    name: "Webcam-based solver for Set",
    thumbnail: images.setSolverThumbnail,
    tags: [
      Tags.PYTHON,
    ],
    date: new Date("2015-03"),
    description: <div>
      <Image
        src={images.setSolverExample}
        alt="Screenshot of Markant"
        height={1000}
        objectFit={"contain"}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          Lost to time
        </p>
        <p>
          <b>Date:</b> Mar. 2015
        </p>
      </div>
      <p>
        Program to find sets in the popular puzzle card game <a href="https://www.playmonster.com/brands/set/">Set</a>. It used your webcam to look at the table and then highlighted valid solutions on the screen. It was implemented in Python with <a href="https://opencv.org/">OpenCV</a>.
      </p>
    </div>,
  },
];

export default projects;
