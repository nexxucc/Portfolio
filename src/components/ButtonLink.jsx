import { Link } from 'react-router-dom';

function isExternalHref(href = '') {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
}

export function ButtonLink({ to, href, variant = 'primary', children, disabled = false }) {
  const className = `btn btn-${variant}${disabled ? ' btn-disabled' : ''}`;
  const target = href?.startsWith('http') ? '_blank' : undefined;
  const rel = target ? 'noreferrer' : undefined;

  if (disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <a href={href || '#'} className={className}>
      {children}
    </a>
  );
}