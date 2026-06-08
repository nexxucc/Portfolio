import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="bento-card not-found-card fade-up">
          <p className="section-label">404</p>
          <h2 className="section-title">Page not found</h2>
          <p className="section-description">The page you are looking for does not exist.</p>

          <Link to="/" className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}