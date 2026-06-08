import profileImage from '../assets/profile.jpg';
import { profile, heroHighlights } from '../data/profile';
import { ButtonLink } from '../components/ButtonLink';
import { Icon } from '../utils/icons';

export function Home() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div className="hero-intro">
              <span className="hero-status">
                <span className="status-dot"></span>
                {profile.status}
              </span>
            </div>

            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-description">{profile.description}</p>

            <div className="hero-cta">
              <ButtonLink to="/work">
                Take a look at my work
                <Icon name="ArrowRight" size={16} />
              </ButtonLink>

              <ButtonLink to="/chat" variant="secondary">
                Chat with me
              </ButtonLink>

              <ButtonLink to="/contact" variant="secondary">
                Get in Touch
              </ButtonLink>
            </div>
          </div>

          <div className="hero-image">
            <img src={profileImage} alt="Vansh Jain" />
          </div>
        </div>
      </section>

      <section className="section section-compact" id="about">
        <div className="container">
          <div className="section-header fade-up">
            <p className="section-label">About</p>
            <h2 className="section-title">A bit about me</h2>
          </div>

          <div className="bento-grid stagger-children">
            <div className="bento-card bento-two-thirds about-main">
              <p>
                I am a Computer Science student specializing in AI and Robotics, with hands-on work across agentic AI,
                retrieval systems, full-stack product interfaces, and applied machine learning. I like building systems
                where the model is only one part of the workflow, supported by clear state, useful context, and a
                practical user experience.
              </p>

              <p>
                My recent work has focused on testing and improving multi-turn AI agents, building document-aware
                research tools, creating AI product workflows, and experimenting with Python-based market signal
                frameworks. I care about whether an AI system can be used, debugged, evaluated, and trusted beyond a
                simple demo.
              </p>
            </div>

            {heroHighlights.map((item) => (
              <div className="bento-card bento-third info-card" key={item.label}>
                <div className="info-card-icon">
                  <Icon name={item.icon} />
                </div>

                <p className="info-card-label">{item.label}</p>
                <p className="info-card-value">{item.value}</p>
                <p className="info-card-sub">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}