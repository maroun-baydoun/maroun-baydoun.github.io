import "./style.css";

import { projects } from "./data";

const projectList = document.querySelector<HTMLUListElement>(
  "[data-project-list]",
);

if (projectList) {
  projectList.innerHTML = projects
    .map(
      (project) => `
        <li class="project-card">
          <a href="${project.href}" rel="noreferrer" target="_blank">
            <span class="project-card-label">${project.kind ?? "Library"}</span>
            <span class="project-card-title">${project.name}</span>
            <span class="project-card-description">${project.description}</span>
            <span class="project-card-cta">Open project</span>
          </a>
        </li>
      `,
    )
    .join("");
}
