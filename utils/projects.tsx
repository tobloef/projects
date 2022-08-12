import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import * as images from "./images";
import { Property } from "csstype";

export type Project = {
  key: string,
  name: string,
  thumbnail: StaticImageData,
  description: ReactNode,
  date: Date,
  tags: Tag[],
  options?: Partial<{
    thumbnailAlignment: Property.ObjectPosition,
  }>
};


export type Tag = {
  name: string,
  color: string,
}

export const Tags = {
  TS: {
    name: "TypeScript",
    color: "#00B8D9"
  },
  JS: {
    name: "JavaScript",
    color: "#d3a200"
  },
  WORK: {
    name: "Work-related",
    color: "#0052CC",
  },
  WIP: {
    name: "Work in progress",
    color: "#ff3f16",
  },
  PYTHON: {
    name: "Python",
    color: "#00875A",
  },
  RUST: {
    name: "Rust",
    color: "#F46623",
  },
} as const;

export type TagKey = keyof typeof Tags;

const projects: Project[] = [
  {
    key: "markant",
    name: "Markant - An online Markdown editor",
    thumbnail: images.markantThumbnail,
    tags: [
      Tags.JS,
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
        Key takeaways from this project was strengthened my core web development skills, releasing a finished product to the public and dealing with feedback from users, and experimenting with marketing for software.
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
  {
    key: "3d-renderer",
    name: "PutPix - 3D renderer from scratch",
    thumbnail: images.putPixThumbnail,
    tags: [
      Tags.TS,
      Tags.RUST,
      Tags.WIP,
    ],
    date: new Date("2022-08"),
    options: {
      thumbnailAlignment: "center"
    },
    description: <div>
      <Image
        src={images.putPixThumbnail}
        alt="Screenshot of PutPix"
        height={600}
        objectFit={"contain"}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/putpix-3d-ts">Github (TypeScript)</a>
          {" / "}
          <a href="https://github.com/tobloef/putpix-3d-rust-wasm">Github (Rust)</a>
          {" / "}
          <a href="https://tobloef.com/putpix-3d-ts/">Demo</a>
        </p>
        <p>
          <b>Date:</b> Aug. 2022
        </p>
      </div>
      <p>
        Web-based 3D rasterizer written completely from scratch. It does not use a 3D graphics library like OpenGL or Vulkan, and instead relies only on a simple HTML5 canvas and a function to put a single put pixel on the screen (hence the name). This means that it runs on the CPU, making it quite slow for any practical purposes.
        <br />
        <br />
        The goal for the renderer was to learn more about the math and technical hoops required to render 3D graphics, so for that reason it did not have to be particularly performant. I did, however, want to see if I could get any {"\"easy wins\""} in terms of performance, so after some promising initial tests, I rewrote the renderer in Rust and compiled it to WebAssembly.
        <br />
        <br />
        The results were very good and the Rust/WASM based renderer is over 10 times as fast as the TypeScript version, even though the algorithms used are exactly the same. In terms of writing the code, I actually found the two languages to feel very similar. In a way, Rust just goes the extra step and natively supports all the patterns that I would normally reach to a third-party library for.
      </p>
    </div>,
  },
];

export default projects;
