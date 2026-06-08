export function SectionHeader({ label, title, description }) {
  return (
    <div className="section-header fade-up">
      <p className="section-label">{label}</p>
      <h1 className="section-title">{title}</h1>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}