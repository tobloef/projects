import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import * as images from "./images";
import { Property } from "csstype";
import Link from "next/link";
import { projectsExample } from "./images";

export type Project = {
  key: string,
  name: string,
  thumbnail: string,
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
  WORK: {
    name: "Work",
    color: "#0fbe00",
  },
  TS: {
    name: "TypeScript",
    color: "#00B8D9",
  },
  JS: {
    name: "JavaScript",
    color: "#d3a200",
  },
  REACT: {
    name: "React",
    color: "#5CC8FF",
  },
  CSHARP: {
    name: "C#",
    color: "#01c27e",
  },
  PYTHON: {
    name: "Python",
    color: "#00875A",
  },
  SVELTE: {
    name: "Svelte",
    color: "#FFAE00",
  },
  RUST: {
    name: "Rust",
    color: "#F46623",
  },
  JAVA: {
    name: "Java",
    color: "#1D397A",
  },
  GO: {
    name: "Go",
    color: "#0077ff",
  },
  FSHARP: {
    name: "F#",
    color: "#01c27e",
  },
  ELIXIR: {
    name: "Elixir",
    color: "#ff76ec",
  },
  GAME: {
    name: "Game",
    color: "#9A09F6",
  },
  SECURITY: {
    name: "Security",
    color: "#F60997",
  },
  WIP: {
    name: "Work in progress",
    color: "#ff3f16",
  },
} as const;

export type TagKey = keyof typeof Tags;

const projects: Project[] = [
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
      thumbnailAlignment: "center",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.putPixThumbnail}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Web-based 3D rasterizer written completely from scratch. It does not use a 3D graphics
        library like OpenGL or Vulkan, and instead relies only on a simple HTML5 canvas and a
        function to put a single put pixel on the screen (hence the name). This means that it runs
        on the CPU, making it quite slow for any practical purposes.
        <br/>
        <br/>
        The goal for the renderer was to learn more about the math and technical hoops required to
        render 3D graphics, so for that reason it did not have to be particularly performant. I did,
        however, want to see if I could get any {"\"easy wins\""} in terms of performance, so after
        some promising initial tests, I rewrote the renderer in Rust and compiled it to WebAssembly.
        <br/>
        <br/>
        The results were very good and the Rust/WASM based renderer is over 10 times faster than the
        TypeScript version, even though the algorithms used are exactly the same. In terms of
        writing the code, I actually found the two languages to feel very similar. In a way, Rust
        just goes the extra step and natively supports all the patterns that I would normally reach
        to a third-party library for.
      </p>
    </div>,
  },
  {
    key: "clearvoyage",
    name: "ClearVoyage - Maritime VMS",
    thumbnail: images.cvVms,
    tags: [
      Tags.TS,
      Tags.REACT,
      Tags.WORK,
    ],
    date: new Date("2022-07"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.cvVms}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://www.clearvoyage.com/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> 2020-Present
        </p>
      </div>
      <p>
        Modern Voyage Management System for the maritime industry. Built as a <a
        href="https://reactjs.org/">React</a> SPA with a <a
        href="https://nodejs.org/en/">Node.js</a> JSON API on the backend. This is project is the
        largest codebase I have worked at, clocking in at around 130,000 lines at the time of
        writing.
        <br/>
        <br/>
        I joined the project about half a year into development and one of my primary
        responsibilities at the time, was setting on the CI/CD pipeline. After this I joined the
        core product team and later lead our migration from Javascript to TypeScript.
        <br/>
        <br/>
        The project is hosted on AWS, with GitHub actions for CI/CD. On the frontend, the <a
        href="https://ant.design/">Ant Design</a> UI library is used. For the database we used <a
        href="https://www.postgresql.org/">PostgreSQL</a> with the <a href="https://sequelize.org/">Sequelize
        ORM</a>. Testing is done with a mixture of <a href="https://jestjs.io/">Jest</a> for unit
        test and integration tests and <a href="https://www.cypress.io/">Cypress</a> for end-to-end
        tests.
      </p>
    </div>,
  },
  {
    key: "crew-app",
    name: "Maritime Vessel Reporting App",
    thumbnail: images.cvCrew,
    tags: [
      Tags.TS,
      Tags.REACT,
      Tags.WORK,
    ],
    date: new Date("2021-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.cvCrew}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://www.clearvoyage.com/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> Feb. 2021
        </p>
      </div>
      <p>
        Web app for voyage reporting on maritime vessels, created by me at ClearVoyage as part of my
        bachelor thesis. The application checks report data for errors, is capable of auto-filling
        certain fields and can even be set up to generate a multitude of report forms from a single
        input form.
        <br/>
        <br/>
        To support spotty satellite internet when at sea, the app was made with an offline-first
        approach. Using <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">service
        workers</a> the website can be accessed while offline and thanks to a custom syncing system
        data is sent to the API once back online.
        <br/>
        <br/>
        The app had to support a diverse number of customer needs, so special care was put into the
        architecture of the project. The backend is structured based on Bob {"Martin's"} <a
        href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html">Clean
        Architecture</a> and the frontend uses a custom system to generate UI in a data-driven
        manner.
        <br/>
        <br/>
        For the tech stack I used Node.js and React, both with TypeScript. The build system is also
        a custom Webpack setup to a large monorepo with many smaller apps sharing code. For the
        database I used <a href="https://www.postgresql.org/">PostgreSQL</a> and <a
        href="https://www.sqlite.org/index.html">SQLite</a> with <a
        href="https://typeorm.io/">TypeORM</a>.
      </p>
    </div>,
  },
  {
    key: "flexmat",
    name: "FlexMat - Industrial vending machine",
    thumbnail: images.flexmatHardware,
    tags: [
      Tags.JS,
      Tags.REACT,
      Tags.CSHARP,
      Tags.WORK,
    ],
    date: new Date("2020-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 300,
      }}>
        <Image
          layout={"fill"}
          src={images.flexmatHardware}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://www.ilxsystem.dk/flexmat">Homepage</a>
        </p>
        <p>
          <b>Date:</b> 2017 - 2020
        </p>
      </div>
      <p>
        Smart industrial vending machine solution for the automotive industry. With capabilities
        such as tracking inventory with weight sensors and automatically sending refill orders, this
        was quite a project complex. Apart from the <a
        href="https://www.electronjs.org/">Electron</a>-based kiosk app running on the machines, the
        project also had a <a href="https://reactjs.org/">React</a>-based web dashboard for managing
        inventory, employees and customers. The hardware was controlled by custom <a
        href="https://www.arduino.cc/">Arduino</a> boards that talked to the kiosk app over
        ethernet.
        <br/>
        <br/>
        I was the primary developer on this project and was responsible for almost all development
        on both the kiosk app, web dashboard and the hardware integration. This was, at the time,
        the biggest project I had worked on and I learned a ton about managing large codebases,
        software architecture and even managing a few junior devs.
      </p>
    </div>,
  },
  {
    key: "nft",
    name: "Numerous Face Tokens - Mock trading site",
    thumbnail: images.nftFrontpage,
    tags: [
      Tags.TS,
      Tags.REACT,
    ],
    date: new Date("2021-11"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.nftFrontpage}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/numerous-face-tokens">GitHub</a>
          {" / "}
          <a href="https://server.tobloef.com/nft/react/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> Nov. 2021
        </p>
      </div>
      <p>
        A mock trading platform where people can buy and sell so-called <Link
        href="/?project=face-generator" shallow>Numerous Face Tokens</Link>. I designed this project
        to cover all the basics of a web app, with the intent to re-implement parts of the project
        using multiple technologies, as a <a
        href="https://en.wikipedia.org/wiki/Kata#Outside_martial_arts">kata</a> of sorts. I think
        this provides a valuable opportunity to experiment with new tools in a focused manner.
        <br/>
        <br/>
        The initial version of the app was a React SPA frontend with a Rest-ish Node.js API on the
        backend and <a href="https://www.prisma.io/">Prisma ORM</a> for database access. I focused
        heavily on end-to-end type safety and iterated on an architecture that made this easy. In
        the end I concluded that while it was possible to achieve the level of type safety I wanted,
        it {"wasn't"} very fun with the tools I had chosen.
        <br/>
        <br/>
        Next up will be trying out <a href="https://graphql.org/">GraphQL</a> (in progress), <a
        href="https://trpc.io/">tRPC</a> and SSR with <a href="https://nextjs.org/">Next.js</a>.
      </p>
    </div>,
  },
  {
    key: "markant",
    name: "Markant - An online Markdown editor",
    thumbnail: images.markantThumbnail,
    tags: [
      Tags.JS,
    ],
    date: new Date("2017-02"),
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.markantExample}
          alt="Thumbnail"
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Markant is a web-based Markdown editor with support for LaTeX math notation. Originally
        meant to suit my own needs (studying Computer Science and Mathematics), I eventually decided
        to polish it up for other people to use. Built with vanilla HTML, CSS and JS, with a bit of
        jQuery, because I at the time wanted to get away from frameworks for a little while. It
        uses <a href="https://github.com/codemirror/dev/">CodeMirror</a> for text-editing, <a
        href="https://github.com/markdown-it/markdown-it">markdown-it</a> to render Markdown as HTML
        and <a href="https://github.com/KaTeX/KaTeX">KaTeX</a> to render LaTeX math.
        <br/>
        <br/>
        Key takeaways from this project was strengthened my core web development skills, releasing a
        finished product to the public and dealing with feedback from users, and experimenting with
        marketing for software.
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
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.roll20DiceScreenshot}
          alt="Thumbnail"
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/roll20-fancy-dice">Github</a>
          {" / "}
          <a
            href="https://chrome.google.com/webstore/detail/custom-dice-for-roll20/hdjlljfnjnigpapdangkablekkoohdln">Chrome
            Web Store</a>
        </p>
        <p>
          <b>Date:</b> Jan. 2020
        </p>
      </div>
      <p>
        A Chrome extension that adds fancier 3D dice to <a href="https://roll20.net/">Roll20</a>, an
        online virtual tabletop (VTT) for playing D&D and the like. Roll20 already support showing
        virtual dice when you roll during a game, but they are very plain and I wanted to give
        players a better opportunity to express themselves.
        <br/>
        <br/>
        I accomplished this by writing a Chrome extension that would intercept requests to the
        Roll20 server, and inject its own behaviour in certain cases. This project was therefore
        largely a reverse engineering effort, working with the minified source code of Roll20. I
        also set up a small WebSocket server to synchronize settings between users, so they could
        see each {"other's"} dice.
        <br/>
        <br/>
        During the project I set up a nice <a href="https://www.blender.org/">Blender</a> workflow
        for generating dice textures that wrapped seamlessly around the model. Making textures still
        required time and skill, however, so I wanted to make it a community effort. To that end I
        created <a
        href="https://github.com/tobloef/roll20-fancy-dice/wiki/How-to-add-your-own-dice-to-the-extension">extensive
        documentation</a> for the process I had developed, which paid off when the project received
        a number of cool contributions from the community.
      </p>
    </div>,
  },
  {
    key: "neurealnet",
    name: "Neural Network from scratch",
    thumbnail: images.neuralnetThumbnail,
    tags: [
      Tags.PYTHON,
    ],
    date: new Date("2017-12"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 250,
      }}>
        <Image
          layout={"fill"}
          src={images.neuralnetThumbnail}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/neural-network">GitHub</a>
        </p>
        <p>
          <b>Date:</b> Dec. 2017
        </p>
      </div>
      <p>
        Python implementation of a neural network, written without the use of any machine learning
        libraries. It recognizes hand-written numbers, trained on the classic <a
        href="http://yann.lecun.com/exdb/mnist/">MNIST dataset</a>. I used <a
        href="https://numpy.org/">NumPy</a> for math and Micheal {"Nielsen's"} <a
        href="https://github.com/mnielsen/neural-networks-and-deep-learning/blob/master/src/mnist_loader.py">mnist_loader.py</a> for
        loading the data.
        <br/>
        <br/>
        After some testing I arrived at hyperparameters that results in ~95% accuracy.
      </p>
    </div>,
  },
  {
    key: "realtime-editor",
    name: "CollabCore - Real-time editor module",
    thumbnail: images.realtimeEditorExample,
    tags: [
      Tags.TS,
      Tags.SVELTE,
    ],
    date: new Date("2022-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.realtimeEditorExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/realtime-editor">GitHub</a>
          {" / "}
          <a href="https://tobloef.com/realtime-editor/">Demo</a>
        </p>
        <p>
          <b>Date:</b> May 2022
        </p>
      </div>
      <p>
        CollabCore is an attempt at building up a core set of real-time editing capabilities for use
        in future projects. I believe real-time collaboration can be immensely powerful and my plan
        is to expand a number of my existing projects to support this feature as well.
        <br/>
        <br/>
        Internally it uses <a href="https://tiptap.dev/hocuspocus/">Hocuspocus</a> and <a
        href="https://github.com/yjs/yjs">Y.js</a> for the real-time capabilities, and <a
        href="https://prosemirror.net/">PromiseMirror</a> inside a <a
        href="https://svelte.dev/">Svelte</a> app for the editor.
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
      thumbnailAlignment: "center",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 300,
      }}>
        <Image
          layout={"fill"}
          src={images.ctfExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        During Oct. 2017 I focused heavily on doing CTFs (a type of cyber security competition) in
        preparation for the <a href="https://ecsc.eu/">European Cyber Security Challenge</a> finals
        in Malaga. I focused mostly on web security, programming challenges and forensics, while the
        rest of my teammates on the Danish national team focused on other topics.
        <br/>
        <br/>
        Along with these CTFs I made a number of write-ups of the challenges I had solved during the
        competitions. I believe write-ups like those are essential to the CTF ecosystem, as they
        allow everyone to learn from each other and crucially helps you solidify the knowledge you
        gained during the frantic competitions hours.
      </p>
    </div>,
  },
  {
    key: "vowkeeper",
    name: "Vowkeeper - Notebook/VTT for Ironsworn",
    thumbnail: images.vowkeeperExample,
    tags: [
      Tags.TS,
      Tags.SVELTE,
    ],
    date: new Date("2021-08"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.vowkeeperExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/VowKeeper">GitHub</a>
          {" / "}
          <a href="https://tobloef.com/VowKeeper/">Demo</a>
        </p>
        <p>
          <b>Date:</b> Aug. 2021
        </p>
      </div>
      <p>
        VowKeeper is a web-based Virtual Tabletop (VTT) for the free TTRPG <a
        href="https://www.ironswornrpg.com/">Ironsown</a>. It primarily focuses on solo-play and is
        therefore built like a rich notebook with domain-specific enhancements. For example, if you
        click on your character sheet to make a roll, this roll will be displayed in
        the {"game's"} log. You can then drag the roll into your notebook document as a small
        widget. Widgets like this can even be updated dynamically, based on later interactions.
        <br/>
        <br/>
        Though the project is now abandoned, it was a nice introduction to <a>Svelte</a>. I also
        tried out various text-edtitor frameworks like <a
        href="https://prosemirror.net/">ProseMirror</a>, <a
        href="https://quilljs.com/">Quill</a>, <a href="https://editorjs.io/">Editor.js</a> and <a
        href="https://tiptap.dev/">Tiptap</a> (which is the one I ended up using).
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
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.setSolverExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Program to find sets in the popular puzzle card game <a
        href="https://www.playmonster.com/brands/set/">Set</a>. It used your webcam to look at the
        table and then highlighted valid solutions on the screen. It was implemented in Python
        with <a href="https://opencv.org/">OpenCV</a>.
      </p>
    </div>,
  },
  {
    key: "fooblog",
    name: "FooBlog - Blogging platform",
    thumbnail: images.fooblogExample,
    tags: [
      Tags.JS,
      Tags.REACT,
    ],
    date: new Date("2019-12"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
        border: "1px solid #ccc"
      }}>
        <Image
          layout={"fill"}
          src={images.fooblogExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/fooblog">GitHub</a>
        </p>
        <p>
          <b>Date:</b> Dec. 2019
        </p>
      </div>
      <p>
        FooBlog is a Medium-like blogging platform where you can view other users posts and register
        to write your own posts and comments. I created it to learn new web technologies, such as <a
        href="https://graphql.org/">GraphQL</a>, <a
        href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> and <a
        href="https://sequelize.org/">Sequelize</a>.
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
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.text2mindmapScreenshot}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Back in 2017 I was an avid user of <a href="https://text2mindmap.com/">text2mindmap.com</a>,
        so when it suddenly shut down I was keen to find an alternative. At the time no such thing
        existed so I cobbled together code from the old website with my own <Link
        href="/?project=markant" shallow>Markant editor</Link>. Originally intended just for
        personal use, the site quickly blew up and now services about ~20,000 users a month.
        <br/>
        <br/>
        Seeing such an interest for the project, I have always wanted to give people a better
        alternative than my quick duct tape solution. So now {"I'm"} slowly tinkering away at a new
        version of the site, written completely from scratch for the collaborative web.
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
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.faceGeneratorExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/face-generator">GitHub</a>
          {" / "}
          <a href="https://server.tobloef.com/faces/random.png">Generate a face</a> (refresh for a
          new one)
        </p>
        <p>
          <b>Date:</b> Oct. 2021
        </p>
      </div>
      <p>
        Created as a parody of CryptoPunks, this deliberately low-effort project turned out more fun
        than anticipated. Go to <a
        href="https://server.tobloef.com/faces/random.png">/random.png</a> for a random face. Or to
        a specific file name, like <a
        href="https://server.tobloef.com/faces/tobloef.png">/tobloef.png</a>, for a static one that
        uses the file name as the seed.
        <br/>
        <br/>
        Built with Node.js and <a href="https://sharp.pixelplumbing.com/">Sharp</a> for image
        processing. I later used the face generator in another project, <Link href={"/?project=nft"}
                                                                              shallow>Numerous Face
        Tokens</Link>.
      </p>
    </div>,
  },
  {
    key: "nem-cv",
    name: "CV Generator with custom web framework",
    thumbnail: images.nemCvThumbnail,
    tags: [
      Tags.JS,
    ],
    date: new Date("2019-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.nemCvExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/nem-cv">GitHub</a>
        </p>
        <p>
          <b>Date:</b> May 2019
        </p>
      </div>
      <p>
        A Squarespace-like CV generator web app created as part of a course at the IT University of
        Copenhagen. I was mostly responsible for implementing the designs created by another member
        of my group.
        <br/>
        <br/>
        We wanted to try vanilla <a
        href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Web Components</a>, but
        after finding that lacking I ended up creating my own small component framework built on top
        of Web Components. The framework allowed you to easily define your HTML/CSS/JS inside a
        single reusable component, similar to <a href="https://vuejs.org/">Vue</a> or <a
        href="https://svelte.dev/">Svelte</a>. You can view an example of a component <a
        href="https://github.com/tobloef/nem-cv/blob/master/components/editor/SideBar.js">here</a>.
      </p>
    </div>,
  },
  {
    key: "polychat",
    name: "PolyChat - Chat app in 3 languages",
    thumbnail: images.polychatExample,
    tags: [
      Tags.JS,
      Tags.GO,
      Tags.ELIXIR,
    ],
    date: new Date("2017-04"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.polychatExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/PolyChat-Node.js-Backend">GitHub (Node.js)</a>
          {" / "}
          <a href="https://github.com/tobloef/PolyChat-Go-Backend">GitHub (Go)</a>
          {" / "}
          <a href="https://github.com/tobloef/Polychat-Elixir-Backend">GitHub (Elixir)</a>
          {" / "}
          <a href="https://github.com/tobloef/PolyChat-Frontend">GitHub (Frontend)</a>
        </p>
        <p>
          <b>Date:</b> Apr. 2017
        </p>
      </div>
      <p>
        PolyChat is a small chat application with a plain HTML/JS frontend and three selectable
        backend. The three backends cover the same specs and were created to compare technologies.
      </p>
    </div>,
  },
  {
    key: "map",
    name: "Map Application",
    thumbnail: images.mapExample,
    tags: [
      Tags.JAVA,
    ],
    date: new Date("2019-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.mapExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/map-application">GitHub</a>
        </p>
        <p>
          <b>Date:</b> May 2019
        </p>
      </div>
      <p>
        A Java application for displaying and navigating map data from OpenStreetMap. Created in
        collaboration with fellow students as part of the first year project at the IT University of
        Copenhagen.
        <br/>
        <br/>
        The application is capable on performance fuzzy address searching and route planing on large
        OSM datasets, as well as performant rendering at any zoom level. It was written in Java
        with <a href="https://openjfx.io/">JavaFX</a> for the UI.
      </p>
    </div>,
  },
  {
    key: "projects",
    name: "Project Portfolio",
    thumbnail: images.projectsExample,
    tags: [
      Tags.TS,
      Tags.REACT,
    ],
    date: new Date("2022-08-16"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.projectsExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/projects">GitHub</a>
          {" / "}
          <Link href="/" shallow>Homepage</Link>
        </p>
        <p>
          <b>Date:</b> Aug. 2022
        </p>
      </div>
      <p>
        This very site! I have wanted an overview of my projects like this for a long time, so when
        I recently had the opportunity to, I knew I had to take it. Technically, {"it's"} fairly
        simple, a static site generated with <a href="https://reactjs.org/">React</a>. I hope you find it interesting, let me know if you
        have any feedback.
        <br/>
        <br/>
        Of course I {"couldn't"} fit everything. Many projects {"didn't"} fit nicely into a
        portfolio, as they were just experiments with different architectures or design patterns,
        without any tangible product. Other projects are simply too old for me not to be embarrassed
        about!
      </p>
    </div>,
  },
  {
    key: "glitch-tool",
    name: "Glitch Tool - For making glitch art",
    thumbnail: images.glitchRose,
    tags: [
      Tags.PYTHON,
    ],
    date: new Date("2018-07"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.glitchViking}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/glitch-tool">GitHub</a>
          {" / "}
          <a href="https://tobloef.com/fun/glitch-art">Article</a>
          {" / "}
          <a href="https://imgur.com/a/lh6NXGN">Gallery</a>
        </p>
        <p>
          <b>Date:</b> Jul. 2018
        </p>
      </div>
      <p>
        During the summer of 2018 I had the opportunity to take part of a small community art
        exhibition. Lacking traditional art skills, I decided to experiment with <a
        href="https://en.wikipedia.org/wiki/Glitch_art">glitch art</a>. For this purpose I created a
        command-line tool to mess up image files in a number of different ways.
        <br/>
        <br/>
        The tool was created in Python and manipulates raw bytes in order to generate interesting
        results. Since it just manipulates bytes regardless of file format, it can be used to
        generate a large variety of effects based on what format is used.
      </p>
    </div>,
  },
  {
    key: "creative",
    name: "Creative Programming Sketches",
    thumbnail: images.creativeExample,
    tags: [
      Tags.JS,
    ],
    date: new Date("2021-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.creativeExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/creative">GitHub</a>
          {" / "}
          <a href="https://tobloef.com/creative/sketches.html">List of sketches</a>
        </p>
        <p>
          <b>Date:</b> May 2021
        </p>
      </div>
      <p>
        A number of small generative art sketches. Each sketch takes a number of parameters
        controlled either with on-screen sliders or with a MIDI controller like the one pictured
        below using <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API">WebMIDI</a>.
      </p>
      <div style={{
        position: "relative",
        height: 200,
      }}>
        <Image
          layout={"fill"}
          src={images.creativeMidiController}
          alt="Thumbnail"
        />
      </div>
    </div>,
  },
  {
    key: "speedcons",
    name: "SpeedCons performance estimator",
    thumbnail: images.cvSpeedcons,
    tags: [
      Tags.JS,
      Tags.REACT,
      Tags.WORK,
    ],
    date: new Date("2020-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.cvSpeedcons}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://www.clearvoyage.com/">Homepage</a>
        </p>
        <p>
          <b>Date:</b> May 2020
        </p>
      </div>
      <p>

      </p>
    </div>,
  },
  {
    key: "base64",
    name: "Specialized base64 viewer",
    thumbnail: images.base64Example,
    tags: [
      Tags.TS,
      Tags.WORK,
      Tags.REACT,
    ],
    date: new Date("2022-03"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.base64Example}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          Proprietary
        </p>
        <p>
          <b>Date:</b> Mar. 2022
        </p>
      </div>
      <p>
        A small internal tool created at ClearVoyage to view certain report formats sent as
        base64-encoded data. Essentially original data is represented as JSON, which is then zipped
        and converted to base64. This tool reverses that process for easy viewing.
      </p>
    </div>,
  },
  {
    key: "ilx-internal",
    name: "Internal tools for ILX System",
    thumbnail: images.leverandorservice,
    tags: [
      Tags.CSHARP,
      Tags.JS,
      Tags.WORK,
    ],
    date: new Date("2016-04"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.leverandorservice}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          Proprietary
        </p>
        <p>
          <b>Date:</b> Apr. 2016
        </p>
      </div>
      <p>
        During my time at ILX System I created several tools for internal use. Most of these had to
        do with invoicing, for example sending emails to customers or interfacing with NETS
        LeverandørService.
      </p>
    </div>,
  },
  {
    key: "card-fu",
    name: "Card Fu - Online multiplayer card game",
    thumbnail: images.cardFuThumbnail,
    tags: [
      Tags.JS,
      Tags.GAME,
    ],
    date: new Date("2016-02"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.cardFuThumbnail}
          alt="Thumbnail"
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Card-Fu is an online multiplayer game based on {"Club Penguin's"} Card-Jitsu mini-game.
        Built with HTML5 Canvas, Node.js, and Socket.io.
        <br/>
        <br/>
        This project was my introduction to both HTML5 Canvas and WebSockets, two technologies that
        I have enjoyed using ever since. To me they represent two of the most fun aspects of the
        web: Easily sharable graphics programing and real-time collaboration.
      </p>
    </div>,
  },
  {
    key: "yoto",
    name: "You Only Tap Once - Casual Android game",
    thumbnail: images.yotoThumbnail,
    tags: [
      Tags.JAVA,
      Tags.GAME,
    ],
    date: new Date("2015-11"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.yotoThumbnail}
          alt="Thumbnail"
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          <a href="https://github.com/tobloef/you-only-tap-once">Github</a>
          {" / "}
          <a href="https://play.google.com/store/apps/details?id=com.tobloef.yoto.android">Google
            Play</a>
        </p>
        <p>
          <b>Date:</b> Nov. 2015
        </p>
      </div>
      <p>
        You Only Tap Once is a simple mobile game about chain reactions. It was made with Java and
        the <a href="https://libgdx.com/">libGDX</a> game framework. My very first Open Source
        project.
        <br/>
        <br/>
        After a few years of starting many small programming projects, I wanted to actually finish
        and release something. So I scoped this project to be as small as I possibly could and still
        call it a game. And it worked! I finished the game, and even had time to add a
        few {"\"nice to have\""} features. Looking back on the code now {"it's"} clear that this was
        early days for me. Still, at the time I was proud that I managed to release it.
        <br/>
        <br/>
        I also made a <a href="https://www.lexaloffle.com/bbs/?tid=48888">Pico-8 version</a> many
        years later, as a sort of tribute.
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
      thumbnailAlignment: "top",
    },
    description: <div>
      <div style={{
        position: "relative",
        height: 350,
      }}>
        <Image
          layout={"fill"}
          src={images.co2Thumbnail}
          alt="Thumbnail"
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
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
        Dashboard for monitoring CO₂ levels and temperature with a USB CO₂ sensor like <a
        href="https://www.amazon.com/CO2Meter-RAD-0301-Mini-Monitor-White/dp/B00H7HFINS">this
        one</a>. Made with HTML/CSS, Node.js, and Socket.io. The code is split into three parts: A
        web client for the dashboard, a server for receiving and storing data and a Node.js-based
        client for the machine connected to the CO₂ sensor (a Raspberry Pi for example).
        <br/>
        <br/>
        Using this in environments with bad indoor climate really helped in staying fresh, reminding
        you to open the window <i>before</i> your head got too foggy instead of after.
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
      thumbnailAlignment: "bottom",
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
        justifyContent: "space-between",
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
        A small game about flying and sacrificing people to a volcano. Made in Unity by me and a two
        friends for the 3-day Ludum Dare 43 game jam. We placed 65th out of 2,508 in {"Fun"} and
        270th overall.
        <br/>
        <br/>
        I was primarily responsible for coding the movement system in C#, and it ended up being
        pretty satisfying in how you had to build and keep up your momentum. This project was also a
        good lesson in how much fun games can be, when they are made by (and for) people you know. A
        couple of my friends started speedrunning the game and discovered a number of cool exploits.
        I hope to one day explore this more, creating small games specifically for friends or the
        tools for others to do so.
      </p>
    </div>,
  },
  {
    key: "scrabble",
    name: "Scrabble Bot",
    thumbnail: images.scrabbleBotExample,
    tags: [
      Tags.FSHARP,
    ],
    date: new Date("2020-05"),
    options: {
      thumbnailAlignment: "top",
    },
    description: <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{
        position: "relative",
        height: 400,
      }}>
        <Image
          layout={"fill"}
          src={images.scrabbleBotExample}
          alt="Thumbnail"
          objectFit={"contain"}
        />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <p>
          <b>Links:</b>
          {" "}
          Lost to time
        </p>
        <p>
          <b>Date:</b> May 2020
        </p>
      </div>
      <p>
        A bot capable of playing scrabble at a high level, created as part of a course on functional
        programming at the IT University of Copenhagen. Care was taken to optimize the code, to
        allow for rapid playing on large boards. I enjoyed functional programming in F# quite a lot,
        and have taken many of the lessons I learned with me into my work with TypeScript.
      </p>
    </div>,
  },
];

export default projects;
