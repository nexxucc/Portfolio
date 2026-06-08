export function TagList({ tags, className = 'project-tags' }) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}