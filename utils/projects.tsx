import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import * as images from "./images";
import { Property } from "csstype";
import {
  co2Thumbnail,
  faceGeneratorExample,
  text2mindmapScreenshot,
  yotoThumbnail,
} from "./images";
import Link from "next/link";

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
  JAVA: {
    name: "Java",
    color: "#1d397a",
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
          <a href="https://tobloef.com/putpix-3d-ts/">Demo (TS Version)</a>
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
  {
    key: "co2",
    name: "CO₂ Monitoring Dashboard",
    thumbnail: images.co2Thumbnail,
    tags: [
      Tags.JS,
    ],
    date: new Date("2019-01"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.co2Thumbnail}
        alt="Thumbnail"
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/co2">Github</a>
          {" / "}
          <a href="https://tobloef.com/co2/">Dashboard</a>
        </p>
        <p>
          <b>Date:</b> Jan. 2019
        </p>
      </div>
      <p>
        Dashboard for monitoring CO₂ levels and temperature with a USB CO₂ sensor like <a href="https://www.amazon.com/CO2Meter-RAD-0301-Mini-Monitor-White/dp/B00H7HFINS">this one</a>. Made with HTML/CSS, Node.js, and Socket.io. The code is split into three parts: A web client for the dashboard, a server for receiving and storing data and a Node.js-based client for the machine connected to the CO₂ sensor (a Raspberry Pi for example).
        <br />
        <br />
        Using this in environments with bad indoor climate really helped in staying fresh, reminding you to open the window <i>before</i> your head got too foggy instead of after.
      </p>
    </div>,
  },
  {
    key: "yoto",
    name: "You Only Tap Once - Casual Android game",
    thumbnail: images.yotoThumbnail,
    tags: [
      Tags.JAVA,
    ],
    date: new Date("2015-11"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.yotoThumbnail}
        alt="Thumbnail"
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/you-only-tap-once">Github</a>
          {" / "}
          <a href="https://play.google.com/store/apps/details?id=com.tobloef.yoto.android">Google Play</a>
        </p>
        <p>
          <b>Date:</b> Nov. 2015
        </p>
      </div>
      <p>
        You Only Tap Once is a simple mobile game about chain reactions. It was made with Java and the <a href="https://libgdx.com/">libGDX</a> game framework. My very first Open Source project.
        <br />
        <br />
        After a few years of starting many small programming projects, I wanted to actually finish and release something. So I scoped this project to be as small as I possibly could and still call it a game. And it worked! I finished the game, and even had time to add a few {"\"nice to have\""} features. Looking back on the code now {"it's"} clear that this was early days for me. Still, at the time I was proud that I managed to release it.
        <br />
        <br />
        I also made a <a href="https://www.lexaloffle.com/bbs/?tid=48888">Pico-8 version</a> many years later, as a sort of tribute.
      </p>
    </div>,
  },
  {
    key: "roll20-dice",
    name: "Roll20 Fancy Dice Chrome extension",
    thumbnail: images.roll20DiceScreenshot,
    tags: [
      Tags.JS,
    ],
    date: new Date("2020-01"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.roll20DiceScreenshot}
        alt="Thumbnail"
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/roll20-fancy-dice">Github</a>
          {" / "}
          <a href="https://chrome.google.com/webstore/detail/custom-dice-for-roll20/hdjlljfnjnigpapdangkablekkoohdln">Chrome Web Store</a>
        </p>
        <p>
          <b>Date:</b> Jan. 2020
        </p>
      </div>
      <p>
        A Chrome extension that adds fancier 3D dice to <a href="https://roll20.net/">Roll20</a>, an online virtual tabletop (VTT) for playing D&D and the like. Roll20 already support showing virtual dice when you roll during a game, but they are very plain and I wanted to give players a better opportunity to express themselves.
        <br />
        <br />
        I accomplished this by writing a Chrome extension that would intercept requests to the Roll20 server, and inject its own behaviour in certain cases. This project was therefore largely a reverse engineering effort, working with the minified source code of Roll20. I also set up a small WebSocket server to synchronize settings between users, so they could see each {"other's"} dice.
        <br />
        <br />
        During the project I set up a nice <a href="https://www.blender.org/">Blender</a> workflow for generating dice textures that wrapped seamlessly around the model. Making textures still required time and skill, however, so I wanted to make it a community effort. To that end I created <a href="https://github.com/tobloef/roll20-fancy-dice/wiki/How-to-add-your-own-dice-to-the-extension">extensive documentation</a> for the process I had developed, which paid off when the project received a number of cool contributions from the community.
      </p>
    </div>,
  },
  {
    key: "text2mindmap",
    name: "Text2MindMap - Archive Edition",
    thumbnail: images.text2mindmapScreenshot,
    tags: [
      Tags.JS,
    ],
    date: new Date("2018-03"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.text2mindmapScreenshot}
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
          <a href="https://tobloef.com/text2mindmap/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> Mar. 2018
        </p>
      </div>
      <p>
        Back in 2017 I was an avid user of <a href="https://text2mindmap.com/">text2mindmap.com</a>, so when it suddenly shut down I was keen to find an alternative. At the time no such thing existed so I cobbled together code from the old website with my own <Link href="/?project=markant" shallow>Markant editor</Link>. Originally intended just for personal use, the site quickly blew up and now services about ~20,000 users a month.
        <br />
        <br />
        Seeing such an interest for the project, I have always wanted to give people a better alternative than my quick duct tape solution. So now {"I'm"} slowly tinkering away at a new version of the site, written completely from scratch for the collaborative web.
      </p>
    </div>,
  },
  {
    key: "nft",
    name: "Numerous Face Tokens - Mock trading site",
    thumbnail: images.nftFrontpage,
    tags: [
      Tags.TS,
    ],
    date: new Date("2022-01"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.nftFrontpage}
        alt="Thumbnail"
        height={1100}
        objectFit={"contain"}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/numerous-face-tokens">GitHub</a>
          {" / "}
          <a href="https://server.tobloef.com/nft/react/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> Jan. 2022
        </p>
      </div>
      <p>
        A mock trading platform where people can buy and sell so-called <Link href="/?project=face-generator" shallow>Numerous Face Tokens</Link>. I designed this project to cover all the basics of a web app, with the intent to re-implement parts of the project using multiple technologies, as a <a href="https://en.wikipedia.org/wiki/Kata#Outside_martial_arts">kata</a> of sorts. I think this provides a valuable opportunity to experiment with new tools in a focused manner.
        <br />
        <br />
        The initial version of the app was a React SPA frontend with a Rest-ish Node.js API on the backend. I focused heavily on end-to-end type safety, and thus tried out a few different styles of architectures for this. In the end I concluded that while it was possible to achieve the level of type safety I wanted, it {"wasn't"} very fun with the tools I had chosen.
        <br />
        <br />
        Next up will be trying out <a href="https://graphql.org/">GraphQL</a> (in progress), <a href="https://trpc.io/">tRPC</a> and SSR with <a href="https://nextjs.org/">Next.js</a>.
      </p>
    </div>,
  },
  {
    key: "face-generator",
    name: "Cartoon Face Generator",
    thumbnail: images.faceGeneratorExample,
    tags: [
      Tags.JS,
    ],
    date: new Date("2021-10"),
    options: {
      thumbnailAlignment: "top"
    },
    description: <div>
      <Image
        src={images.faceGeneratorExample}
        alt="Thumbnail"
        height={400}
        objectFit={"contain"}
      />
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/face-generator">GitHub</a>
          {" / "}
          <a href="https://server.tobloef.com/faces/random.png">Generate a face</a> (refresh for a new one)
        </p>
        <p>
          <b>Date:</b> Oct. 2021
        </p>
      </div>
      <p>
        Created as a parody of CryptoPunks, this deliberately low-effort project turned out more fun than anticipated. Go to <a href="https://server.tobloef.com/faces/random.png">/random.png</a> for a random face. Or to a specific file name, like <a href="https://server.tobloef.com/faces/tobloef.png">/tobloef.png</a>, for a static one that uses the file name as the seed.
        <br />
        <br />
        Built with Node.js and <a href="https://sharp.pixelplumbing.com/">Sharp</a> for image processing. I later used the face generator in another project, <Link href={"/?project=nft"} shallow>Numerous Face Tokens</Link>.
      </p>
    </div>,
  },
];

export default projects;
