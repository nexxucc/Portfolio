import { Link } from "react-router-dom";
import { TagList } from "./TagList";
import LivePreview from "./projects/LivePreview";

function isValidExternalLink(link) {
  return Boolean(link && link !== "#");
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function ProjectCard({ project }) {
  const hasGithubLink = isValidExternalLink(project.links?.github);

  return (
    <article className="project-card">
      <LivePreview
        url={project.links?.previewUrl}
        image={project.links?.previewImage}
        liveUrl={project.links?.live}
        title={project.previewTitle}
        meta={project.previewMeta}
        type={project.type}
      />

      <div className="project-actions project-actions--top">
        <Link
          className="project-action project-action--wide"
          to={`/projects/${project.slug}`}
        >
          Know more
        </Link>

        {hasGithubLink ? (
          <a
            className="project-action project-action--icon"
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} GitHub repository`}
          >
            <GitHubIcon />
          </a>
        ) : null}
      </div>

      <p className="project-type">{project.type}</p>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <TagList tags={project.tags} />
    </article>
  );
}
