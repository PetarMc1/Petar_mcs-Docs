import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import ArchiveIcon from '@site/static/img/ArchveIcon.svg';
import "../css/projects.css";

const projects: Project[] = [
  {
    title: "Combination Generator",
    description: "Documentation for my Combination Generator project.",
    repo: "PetarMc1/combination-generator",
    link: "/combination-generator/welcome",
  },
  {
    title: "RGB Generator",
    description: "Documentation for my Minecraft RGB Generator.",
    repo: "PetarMc1/rgb-generator",
    link: "/rgb-generator/about-the-project",
  },
  {
    title: "Font Generator",
    description: "Documentation for my Minecraft Font Generator.",
    repo: "PetarMc1/font-generator",
    link: "/font-generator/about-the-project",
  },
  {
    title: "Minecraft Items API v2",
    description: "Documentation for the Minecraft Items API v2 project.",
    repo: "PetarMc1/minecraft-items-api-v2",
    link: "/api/welcome",
    eol: true,
  },
];

function Project(project: Project) {
  return (
    <div className={"project"}>
      <div className={"flex"}>
        <Link
          className={clsx("projectGitHub")}
          to={`https://github.com/${project.repo}`}
        >
          {project.title}
          {project.eol && <ArchiveIcon className={"projectIcon"} />}
        </Link>
        <p>{project.description}</p>
      </div>
      <div>
        <Link
          className={clsx("button button--primary")}
          to={project.link}
        >
          Go
        </Link>
      </div>
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <section className={"projects"}>
      <div className={"projectsContainer"}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  repo: string;
  link: string;
  eol?: boolean; // Add the optional eol property
}
