import { ReactNode } from "react";
import markantThumbnail from "../public/images/markant/thumbnail.png";
import markantImage1 from "../public/images/markant/example.png";
import Image, { StaticImageData } from "next/image";

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
} as const;

export type TagKey = keyof typeof Tags;

export type Project = {
  key: string,
  name: string,
  thumbnail: StaticImageData,
  description: ReactNode,
  date: Date,
  tags: Tag[],
};

const projects: Project[] = [
  {
    key: "markant",
    name: "Markant - An online Markdown editor",
    thumbnail: markantThumbnail,
    description: <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Image src={markantImage1} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>,
    tags: [
      Tags.WEB,
    ],
    date: new Date("2017-02"),
  }
];

export default projects;
