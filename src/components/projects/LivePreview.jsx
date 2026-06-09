import "./LivePreview.css";

function ExternalPreviewIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7H17V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PreviewFrame({ children, href, label }) {
  if (!href) {
    return <div className="live-preview">{children}</div>;
  }

  return (
    <a
      className="live-preview live-preview--clickable"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}

      <span className="preview-hover-overlay">
        <span className="preview-hover-icon">
          <ExternalPreviewIcon />
        </span>
      </span>
    </a>
  );
}

export default function LivePreview({
  url,
  image,
  liveUrl,
  title,
  meta,
  type,
}) {
  const previewTarget = liveUrl || url;

  if (image) {
    return (
      <PreviewFrame
        href={previewTarget}
        label={`Open deployed version of ${title}`}
      >
        <div className="live-preview-media live-preview--image">
          <img src={image} alt={`${title} preview`} loading="lazy" />
        </div>
      </PreviewFrame>
    );
  }

  if (!url) {
    return (
      <PreviewFrame
        href={previewTarget}
        label={`Open deployed version of ${title}`}
      >
        <div className="live-preview-media live-preview--empty">
          <div className="preview-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="live-preview-fallback">
            <p className="preview-label">{type}</p>
            <h4>{title}</h4>
            <p>{meta}</p>
          </div>
        </div>
      </PreviewFrame>
    );
  }

  return (
    <PreviewFrame
      href={previewTarget}
      label={`Open deployed version of ${title}`}
    >
      <div className="live-preview-media live-preview--frame">
        <iframe
          src={url}
          title={`${title} live preview`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PreviewFrame>
  );
}
