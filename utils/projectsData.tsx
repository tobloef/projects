import { ReactNode } from "react";
import markantThumbnail from "../public/images/markant/thumbnail.png";
import markantImage1 from "../public/images/markant/example.png";
import { StaticImageData } from "next/image";

export type Tag = (
  | "Work"
  | "Web"
)

export type Project = {
  name: string,
  thumbnail: StaticImageData,
  images: StaticImageData[],
  description: ReactNode,
  date: Date,
  tags: Tag[],
};

const projectData: Project[] = [
  {
    name: "Markant - A Markdown Editor",
    thumbnail: markantThumbnail,
    images: [markantImage1, markantImage1, markantImage1],
    description: <p></p>,
    tags: ["Web"],
    date: new Date("2017-02"),
  }
];

export default projectData;
