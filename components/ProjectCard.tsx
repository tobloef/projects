import { Project } from "../utils/projects";
import classes from "./ProjectCard.module.css"
import Image from "next/image";
import { getTagStyle } from "../utils/getTagStyle";
import { CSSProperties } from "react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project,
};

const ProjectCard = ({project}: ProjectCardProps) => {
  return <Link
    href={`/?project=${project.key}`}
    shallow
  >
    <div className={classes.card}>
      <Image
        src={project.thumbnail}
        alt={`Thumbnail for ${project.name}`}
        layout={"intrinsic"}
        objectFit={"cover"}
        objectPosition={project.options?.thumbnailAlignment ?? "top"}
      />
      <div className={classes.info}>
        <span className={classes.name}>{project.name}</span>
        <div className={classes.tags}>
          {project.tags.map((t) => {
            const style = getTagStyle(t.color, {isFocused: true});
            return <span
              className={classes.tag}
              key={t.name}
              style={style as CSSProperties}
            >
            {t.name}
          </span>;
          })}
        </div>
      </div>
    </div>
  </Link>;
}

export default ProjectCard;
