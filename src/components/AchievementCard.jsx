import { useEffect, useState } from 'react';
import { Icon } from '../utils/icons';

export function AchievementCard({ achievement }) {
  const images = achievement.backgroundImages || [];
  const hasImages = images.length > 0;
  const shouldScroll = images.length > 1;
  const hasPostLink = Boolean(achievement.postUrl);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!shouldScroll) return undefined;

    const interval = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [images.length, shouldScroll]);

  const CardTag = hasPostLink ? 'a' : 'article';

  const cardProps = hasPostLink
    ? {
        href: achievement.postUrl,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': `Open post for ${achievement.title}`,
      }
    : {};

  return (
    <CardTag
      className={`achievement-card bento-card${hasImages ? ' achievement-card-image' : ''}`}
      {...cardProps}
    >
      {hasImages ? (
        <div className="achievement-bg" aria-hidden="true">
          <div
            className="achievement-bg-track"
            style={{
              width: `${images.length * 100}%`,
              transform: `translateX(-${activeImageIndex * (100 / images.length)}%)`,
            }}
          >
            {images.map((image) => (
              <div
                className="achievement-bg-panel"
                style={{
                  width: `${100 / images.length}%`,
                  backgroundImage: `url(${image})`,
                }}
                key={image}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="achievement-card-content">
        <div className="info-card-icon">
          <Icon name={achievement.icon || 'Award'} />
        </div>

        <p className="info-card-label">{achievement.subtitle}</p>
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-description">{achievement.description}</p>
      </div>
    </CardTag>
  );
}