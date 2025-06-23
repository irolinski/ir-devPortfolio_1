import { useTranslation } from "react-i18next";
import ProjectPage from "../Components/Project";
import { projectData } from "../constants/projects/projects";

const projectsToDisplay = [
  projectData.Well_CBT,
  projectData.olaPortfolio,
  projectData.neuroCare,
  projectData.topstersClassic,
  projectData.artCollector,
  projectData.sprawdzFodmap,
];

export default function AllProjects() {
  const { t } = useTranslation();

  return (
    <div className="projects-wrapper section lg:mt-0" id="projects-section">
      <h2 className="section-header relative pt-12 text-center">
        {t("recentProjects.header")}
      </h2>
      {projectsToDisplay.map((project, indexNum: number) => (
        <ProjectPage {...project} key={indexNum} />
      ))}
    </div>
  );
}
