import { useState } from "react";
import Sidebar from "./components/Sidebar";
import QuestionList from "./components/QuestionList";
import { htmlQuestions } from "./data/htmlQuestions";
import { cssQuestions } from "./data/cssQuestions";
import { jsQuestions } from "./data/jsQuestions";
import { phpQuestions } from "./data/phpQuestions";
import { reactQuestions } from "./data/reactQuestions";

const topicMap = {
  html: { label: "HTML5", questions: htmlQuestions, accent: "var(--accent-html)" },
  css: { label: "CSS3", questions: cssQuestions, accent: "var(--accent-css)" },
  js: { label: "JavaScript", questions: jsQuestions, accent: "var(--accent-js)" },
  php: { label: "PHP", questions: phpQuestions, accent: "var(--accent-php)" },
  react: { label: "React", questions: reactQuestions, accent: "var(--accent-react)" },
};

export default function App() {
  const [activeTopic, setActiveTopic] = useState("html");
  const active = topicMap[activeTopic];
  const totalPracticals = Object.values(topicMap).reduce(
    (sum, topic) => sum + topic.questions.length,
    0
  );

  return (
    <div className="app-shell">
      <Sidebar
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
        topicMap={topicMap}
      />

      <main className="main-panel">
        <section className="topic-panel">
          <div className="topic-panel__header">
            <div>
              <p className="section-label">Active Topic</p>
              <h2>{active.label}</h2>
              <p className="section-desc">
                {active.questions.length} practical exercises, each with problem statements, source code, and interactive output where available.
              </p>
            </div>
            <span
              className="topic-chip"
              style={{ backgroundColor: active.accent }}
            >
              {active.label}
            </span>
          </div>

          <QuestionList
            questions={active.questions}
            accent={active.accent}
            topic={activeTopic}
          />
        </section>
      </main>
    </div>
  );
}
