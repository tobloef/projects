import { useState } from "react";
import Navbar from "./components/Navbar";
import Parameters from "./components/Parameters";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import { SortFunc } from "./utils/types";
import projects, {
  Project,
  Tag,
} from "./utils/projects";
import classes from "./App.module.css";
import { useSearchParams } from "react-router-dom";

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();

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
        project={projects.find((p) => p.key === searchParams.get("project"))}
        onClose={() => setSearchParams({})}
      />
    </div>
  )
}
