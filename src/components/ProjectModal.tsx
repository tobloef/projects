import { Project } from "../utils/projects";
import classes from "./ProjectModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";
import { getTagStyle } from "../utils/getTagStyle";
import { CSSProperties } from "react";

type ProjectModalProps = {
  project?: Project,
  onClose: () => void,
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (project == null) {
    return null;
  }

  return <div
    className={classes.background}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}
  >
    <div className={classes.modal}>
      <div className={classes.header}>
        <span className={classes.title}>{project.name}</span>
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
        <FontAwesomeIcon
          className={classes.closeButton}
          onClick={onClose}
          icon={faXmark}
        />
      </div>
      <div className={classes.content}>
        {project.description}
      </div>
    </div>
  </div>;
}

export default ProjectModal;
