import { Project } from "../utils/projects";
import classes from "./ProjectCard.module.css"
import { getTagStyle } from "../utils/getTagStyle";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  project: Project,
};

const ProjectCard = ({project}: ProjectCardProps) => {
  return <Link
    to={`/?project=${project.key}`}
    className={classes.link}
  >
    <div className={classes.card}>
      <div className={classes.imageWrapper} style={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      </div>
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
