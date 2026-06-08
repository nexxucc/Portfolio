import { TagList } from './TagList';

export function ExperienceCard({ experience }) {
  return (
    <div className="experience-item fade-up">
      <div className="experience-header">
        <div>
          <h3 className="experience-role">{experience.role}</h3>
          <p className="experience-company">
            {experience.company} • {experience.location}
          </p>
        </div>

        <span className="experience-date">{experience.date}</span>
      </div>

      <ul className="experience-details">
        {experience.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <TagList tags={experience.tags} className="experience-tags" />
    </div>
  );
}