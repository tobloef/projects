import { ReactNode } from "react";
import markantThumbnail from "../public/images/markant/thumbnail.png";
import markantImage1 from "../public/images/markant/example.png";
import { StaticImageData } from "next/image";

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
  name: string,
  thumbnail: StaticImageData,
  images: StaticImageData[],
  description: ReactNode,
  date: Date,
  tags: Tag[],
};

const projects: Project[] = [
  {
    name: "Markant - An online Markdown editor",
    thumbnail: markantThumbnail,
    images: [markantImage1, markantImage1, markantImage1],
    description: <p></p>,
    tags: [
      Tags.WEB,
    ],
    date: new Date("2017-02"),
  }
];

export default projects;
