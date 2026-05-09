const topics = [
  { key: "html", label: "HTML5", icon: "⟨/⟩", accent: "var(--accent-html)" },
  { key: "css", label: "CSS3", icon: "✦", accent: "var(--accent-css)" },
  { key: "js", label: "JavaScript", icon: "JS", accent: "var(--accent-js)" },
  { key: "php", label: "PHP", icon: "php", accent: "var(--accent-php)" },
  { key: "react", label: "React", icon: "⚛", accent: "var(--accent-react)" },
];

export default function Sidebar({ activeTopic, setActiveTopic, topicMap }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__marker">AS</div>
        <div>
          <p className="sidebar__title">Akshat&apos;s Lab</p>
          <p className="sidebar__subtitle">Practice collection</p>
        </div>
      </div>

      <div className="sidebar__intro">
        <p>Choose a topic</p>
        <small>Modern layout, clear navigation, quick access.</small>
      </div>

      <nav className="sidebar__nav">
        {topics.map((t) => {
          const isActive = activeTopic === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTopic(t.key)}
              className="sidebar__item"
              style={{
                borderLeftColor: isActive ? t.accent : "transparent",
                background: isActive ? "var(--surface2)" : "transparent",
              }}
            >
              <span className="sidebar__icon" style={{ color: isActive ? t.accent : "var(--text-muted)" }}>
                {t.icon}
              </span>
              <span className="sidebar__label">{t.label}</span>
              <span className="sidebar__count">{topicMap[t.key].questions.length}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar__footer">
        <p>Akshat Semwal</p>
        <span>Roll No. 15</span>
      </div>
    </aside>
  );
}
