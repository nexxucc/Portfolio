export function ProjectPreview({ title, meta, type }) {
  return (
    <div className="project-preview">
      <div className="preview-topbar">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="preview-body">
        <p className="preview-label">{type}</p>
        <h4>{title}</h4>
        <p>{meta}</p>
      </div>
    </div>
  );
}