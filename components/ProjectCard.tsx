import { Project } from "../utils/projectsData";

type ProjectCardProps = {
  project: Project,
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return project.name;
}

export default ProjectCard;
