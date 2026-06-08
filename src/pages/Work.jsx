import { SectionHeader } from '../components/SectionHeader';
import { ExperienceCard } from '../components/ExperienceCard';
import { ProjectCard } from '../components/ProjectCard';
import { AchievementCard } from '../components/AchievementCard';
import { SkillCategory } from '../components/SkillCategory';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { achievements } from '../data/achievements';
import { skills } from '../data/skills';

export function Work() {
  return (
    <section className="section page-shell" id="work">
      <div className="container">
        <div className="page-content">
          <section className="content-section" id="experience">
            <SectionHeader label="Experience" title="Where I've worked" />

            <div className="bento-card bento-full experience-timeline stagger-children">
              {experiences.map((experience) => (
                <ExperienceCard experience={experience} key={`${experience.company}-${experience.role}`} />
              ))}
            </div>
          </section>

          <section className="content-section" id="projects">
            <SectionHeader label="Projects" title="What I've built" />

            <div className="projects-grid stagger-children">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </section>

          <section className="content-section" id="achievements">
            <SectionHeader label="Achievements" title="Milestones so far" />

            <div className="achievements-grid stagger-children">
              {achievements.map((achievement) => (
                <AchievementCard achievement={achievement} key={achievement.title} />
              ))}
            </div>
          </section>

          <section className="content-section" id="skills">
            <SectionHeader label="Skills" title="Technologies I use" />

            <div className="skills-grid stagger-children">
              {skills.map((skill) => (
                <SkillCategory skill={skill} key={skill.title} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}