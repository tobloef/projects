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
  GAME: {
    name: "Game",
    color: "#9a09f6",
  },
  CSHARP: {
    name: "C#",
    color: "#09f6a3",
  },
  SECURITY: {
    name: "Security",
    color: "#f60997",
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
        alt="Thumbnail"
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
        alt="Thumbnail"
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
        alt="Thumbnail"
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
        The results were very good and the Rust/WASM based renderer is over 10 times faster than the TypeScript version, even though the algorithms used are exactly the same. In terms of writing the code, I actually found the two languages to feel very similar. In a way, Rust just goes the extra step and natively supports all the patterns that I would normally reach to a third-party library for.
      </p>
    </div>,
  },
  {
    key: "bird-in-paradise",
    name: "A Bird in Paradise",
    thumbnail: images.birdInParadiseThumbnail,
    tags: [
      Tags.GAME,
      Tags.CSHARP,
    ],
    date: new Date("2018-12"),
    options: {
      thumbnailAlignment: "bottom"
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_WFx9qkayqU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          margin: "0 auto",
        }}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://ldjam.com/events/ludum-dare/43/a-bird-in-paradise">Ludum Dare Entry</a>
        </p>
        <p>
          <b>Date:</b> Dec. 2018
        </p>
      </div>
      <p>
        A small game about flying and sacrificing people to the volcano god, made in Unity. Created by me and a two friends for the Ludum Dare 43 game jam, and was therefore made in just a few days. We placed 65th out of 2,508 in {"Fun"} and 270th overall.
        <br />
        <br />
        I was primarily responsible for coding the movement system in C#, and it ended up being pretty satisfying in how you had to build and keep up your momentum. This project was also a good lesson in how much fun games can be, when they are made by (and for) people you know. A couple of my friends started speedrunning the game and discovered a number of cool exploits. I hope to one day explore this more, creating small games specifically for friends or the tools for others to do so.
      </p>
    </div>,
  },
  {
    key: "ctf",
    name: "Security CTFs",
    thumbnail: images.ctfThumbnail,
    tags: [
      Tags.SECURITY,
    ],
    date: new Date("2017-10"),
    options: {
      thumbnailAlignment: "center"
    },
    description: <div>
      <Image
        src={images.ctfExample}
        alt="Thumbnail"
        height={700}
        objectFit={"contain"}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Write-ups:</b>
          {" "}
          <a href="https://tobloef.com/ctf/mitre-ctf-2017">Pwn2Win CTF Write-up</a>
          {" / "}
          <a href="https://tobloef.com/ctf/cybercamp-ctf-2017">CyberCamp CTF Quals</a>
          {" / "}
          <a href="https://tobloef.com/ctf/pwn2win-ctf-2017">STEM CTF</a>
        </p>
        <p>
          <b>Date:</b> Oct. 2017
        </p>
      </div>
      <p>
        During Oct. 2017 I focused heavily on doing CTFs (a type of cyber security competition) in preparation for the <a href="https://ecsc.eu/">European Cyber Security Challenge</a> finals in Malaga. I focused mostly on web security, programming challenges and forensics, while the rest of my teammates on the Danish national team focused on other topics.
        <br />
        <br />
        Along with these CTFs I made a number of write-ups of the challenges I had solved during the competitions. I believe write-ups like those are essential to the CTF ecosystem, as they allow everyone to learn from each other and crucially helps you solidify the knowledge you gained during the frantic competitions hours.
      </p>
    </div>,
  },
  {
    key: "card-fu",
    name: "Card Fu - Online multiplayer card game",
    thumbnail: images.cardFuThumbnail,
    tags: [
      Tags.JS,
    ],
    date: new Date("2016-02"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.cardFuThumbnail}
        alt="Thumbnail"
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/card-fu">Github</a>
          {" / "}
          <a href="https://cardfu.herokuapp.com/">Play the game</a>
        </p>
        <p>
          <b>Date:</b> Feb. 2016
        </p>
      </div>
      <p>
        Card-Fu is an online multiplayer game based on {"Club Penguin's"} Card-Jitsu mini-game. Built with HTML5 Canvas, Node.js, and Socket.io.
        <br />
        <br />
        This project was my introduction to both HTML5 Canvas and WebSockets, two technologies that I have enjoyed using ever since. To me they represent two of the most fun aspects of the web: Easily sharable graphics programing and real-time collaboration.
      </p>
    </div>,
  },
];

export default projects;
