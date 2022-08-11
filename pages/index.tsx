import Navbar from "../components/Navbar";
import styles from "./index.module.css";
import Parameters from "../components/Parameters";
import ProjectCard from "../components/ProjectCard";
import projectsData, {
  Project,
  Tag,
} from "../utils/projectsData";
import { useState } from "react";
import { SortFunc } from "../utils/types";

export default function Index() {
  const [filterTags, setFilterTags] = useState<Tag[]>([]);
  const [sortFunc, setSortFunc] = useState<SortFunc<Project> | null>(null);

  const shownProjects: Project[] = projectsData
    .filter((p) => filterTags.every((ft) => p.tags.includes(ft)))
    .sort(sortFunc ?? undefined);

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <Parameters
          tags={filterTags}
          onTagsChange={setFilterTags}
          sortFunc={sortFunc}
          onSortFuncChange={(newSortFunc) => setSortFunc(() => newSortFunc)}
        />
        <div className={styles.projectsContainer}>
          {shownProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
