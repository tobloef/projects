import Navbar from "../components/Navbar";
import classes from "./index.module.css";
import Parameters from "../components/Parameters";
import ProjectCard from "../components/ProjectCard";
import projects, {
  Project,
  Tag,
} from "../utils/projects";
import { useState } from "react";
import { SortFunc } from "../utils/types";
import { useRouter } from "next/router";
import ProjectModal from "../components/ProjectModal";

export default function Index() {
  const router = useRouter();

  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [sortFunc, setSortFunc] = useState<SortFunc<Project> | null>(null);

  const shownProjects: Project[] = projects
    .filter((p) => filterTags.every((ft) => p.tags.some((t) => t.name === ft)))
    .sort(sortFunc ?? undefined);

  return (
    <div className={classes.page}>
      <Navbar />
      <main className={classes.main}>
        <Parameters
          tags={filterTags}
          onTagsChange={setFilterTags}
          sortFunc={sortFunc}
          onSortFuncChange={(newSortFunc) => setSortFunc(() => newSortFunc)}
        />
        <div className={classes.projectsContainer}>
          {shownProjects.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
            />
          ))}
        </div>
      </main>
      <ProjectModal
        project={projects.find((p) => p.key === router.query.project)}
        onClose={() => router.push("/")}
      />
    </div>
  )
}
