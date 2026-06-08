import { Link, Navigate, useParams } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectPreview } from '../components/ProjectPreview';
import { TagList } from '../components/TagList';
import { getProjectBySlug } from '../data/projects';
import { Icon } from '../utils/icons';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section className="section page-section" id={project.slug}>
      <div className="container">
        <SectionHeader label={project.type} title={project.title} description={project.longDescription} />

        <div className="project-detail-layout fade-up">
          <div className="project-detail-main bento-card">
            <ProjectPreview title={project.previewTitle} meta={project.previewMeta} type={project.type} />
            <TagList tags={project.tags} />

            <div className="project-actions detail-actions">
              <a href={project.links.github} target="_blank" rel="noreferrer" className="project-action">
                GitHub
              </a>

              <Link to="/work" className="project-action">
                Back to Projects
              </Link>
            </div>
          </div>

          <div className="project-detail-content">
            {project.sections.map((section) => (
              <article className="bento-card project-detail-section" key={section.title}>
                <div className="info-card-icon">
                  <Icon name="Sparkles" />
                </div>

                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}