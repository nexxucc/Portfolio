import { SectionHeader } from "../components/SectionHeader";
import { resume } from "../data/resume";
import { Icon } from "../utils/icons";

function ResumeSection({ title, children }) {
  return (
    <section className="resume-block">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function Resume() {
  const resumePdfPath = `${import.meta.env.BASE_URL}resume/Vansh_Jain_Resume.pdf`;

  return (
    <section className="section page-section" id="resume">
      <div className="container">
        <SectionHeader />

        <div className="resume-actions fade-up">
          <a
            className="btn btn-secondary"
            href={resumePdfPath}
            download="Vansh_Jain_Resume.pdf"
          >
            <Icon name="Download" size={16} />
            Download
          </a>

          <a
            className="btn btn-secondary"
            href={resumePdfPath}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="FileText" size={16} />
            Open in PDF viewer
          </a>
        </div>

        <article className="resume-card bento-card fade-up">
          <header className="resume-header">
            <h2>{resume.header.name}</h2>
            <p>
              {resume.header.phone} | {resume.header.email} |{" "}
              {resume.header.linkedin} | {resume.header.github} |{" "}
              {resume.header.location}
            </p>
          </header>

          <ResumeSection title="Experience">
            {resume.experience.map((item) => (
              <div className="resume-item" key={`${item.company}-${item.role}`}>
                <div className="resume-item-header">
                  <div>
                    <h4>{item.company}</h4>
                    <p>
                      {item.role} • {item.location}
                    </p>
                  </div>

                  <span>{item.date}</span>
                </div>

                <ul className="experience-details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Projects">
            {resume.projects.map((project) => (
              <div className="resume-item" key={project.title}>
                <div className="resume-item-header">
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.type}</p>
                  </div>
                </div>

                <p className="resume-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span className="tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </ResumeSection>

          <ResumeSection title="Technical Skills">
            <div className="resume-skills">
              {Object.entries(resume.skills).map(([group, items]) => (
                <p key={group}>
                  <strong>{group}:</strong> {items.join(", ")}
                </p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Achievements">
            <div className="resume-achievements">
              {resume.achievements.map((achievement) => (
                <p key={achievement.title}>
                  <strong>{achievement.title}</strong> | {achievement.subtitle}{" "}
                  - {achievement.description}
                </p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection title="Education">
            <div className="resume-item no-border">
              <div className="resume-item-header">
                <div>
                  <h4>{resume.education.institution}</h4>
                  <p>
                    {resume.education.degree} •{" "}
                    {resume.education.specialization}
                  </p>
                </div>

                <span>{resume.education.date}</span>
              </div>

              <p className="resume-description">{resume.education.location}</p>
            </div>
          </ResumeSection>
        </article>
      </div>
    </section>
  );
}
