import { Icon } from '../utils/icons';

export function SkillCategory({ skill }) {
  return (
    <div className="skill-category fade-up">
      <h3>
        <Icon name={skill.icon} />
        {skill.title}
      </h3>

      <div className="skill-tags">
        {skill.items.map((item) => (
          <span className="skill-tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}