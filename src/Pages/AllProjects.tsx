import { projectData } from "../constants/projects/projects";
import ProjectPage from "./Project";

const projectsToDisplay = [
  projectData.Well_CBT,
  projectData.olaPortfolio,
  projectData.neuroCare,
  projectData.topstersClassic,
  projectData.artCollector,
  projectData.sprawdzFodmap,
];

export default function AllProjects() {
  return (
    <div
      className="projects-wrapper section -mt-48 sm:-mt-36 lg:mt-0"
      id="projects-section"
    >
      <h2 className="section-header relative pt-12 text-center lg:pt-32">
        Recent projects.
      </h2>
      {projectsToDisplay.map((project, indexNum: number) => (
        <ProjectPage {...project} key={indexNum} />
      ))}
    </div>
  );
}
