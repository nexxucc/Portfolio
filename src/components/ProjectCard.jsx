import { Link } from "react-router-dom";
import { Icon } from "../utils/icons";
import { TagList } from "./TagList";
import { ProjectPreview } from "./ProjectPreview";

function getProjectIcon(type) {
  if (type.includes("Shopify")) return "ShoppingBag";
  if (type.includes("Market")) return "LineChart";
  if (type.includes("Document")) return "FileText";
  return "Bot";
}

function isValidExternalLink(link) {
  return Boolean(link && link !== "#");
}

export function ProjectCard({ project }) {
  const iconName = getProjectIcon(project.type);
  const hasLiveLink = isValidExternalLink(project.links.live);
  const hasGithubLink = isValidExternalLink(project.links.github);

  return (
    <article className="project-card">
      <ProjectPreview
        title={project.previewTitle}
        meta={project.previewMeta}
        type={project.type}
      />

      <div className="project-header">
        <div className="project-icon">
          <Icon name={iconName} />
        </div>

        {hasLiveLink ? (
          <a
            href={project.links.live}
            className="project-link"
            target="_blank"
            rel="noreferrer"
            aria-label={`Open deployed version of ${project.title}`}
          >
            <Icon name="ExternalLink" size={18} />
          </a>
        ) : null}
      </div>

      <p className="project-type">{project.type}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <TagList tags={project.tags} />

      <div className="project-actions">
        <Link className="project-action" to={`/projects/${project.slug}`}>
          Case Study
        </Link>

        {hasGithubLink ? (
          <a
            className="project-action"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
