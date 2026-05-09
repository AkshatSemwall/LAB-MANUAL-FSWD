import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import php from "react-syntax-highlighter/dist/esm/languages/hljs/php";
import OutputViewer from "./OutputViewer";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("php", php);

const langMap = { html: "xml", css: "css", js: "javascript", php: "php", react: "javascript" };
const canRun = ["html", "css", "js"];

export default function QuestionCard({ question, index, accent, topic, isOpen, onToggle }) {
  const [tab, setTab] = useState("problem");

  const tabStyle = (active) => ({
    padding: "6px 16px",
    borderRadius: 6,
    border: "none",
    background: active ? accent : "transparent",
    color: active ? "#000" : "var(--text-muted)",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.15s",
    letterSpacing: 0.5,
  });

  return (
    <div style={{
      background: "var(--surface)",
      border: `1px solid ${isOpen ? accent + "55" : "var(--border)"}`,
      borderRadius: 12,
      overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      {/* Question Header */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          fontWeight: 700,
          color: accent,
          background: accent + "18",
          padding: "4px 10px",
          borderRadius: 6,
          minWidth: 36,
          textAlign: "center",
          flexShrink: 0,
        }}>Q{index + 1}</span>

        <span style={{
          fontSize: 14,
          fontWeight: 600,
          color: "var(--text)",
          flex: 1,
          lineHeight: 1.5,
        }}>{question.title}</span>

        <span style={{
          color: "var(--text-muted)",
          fontSize: 18,
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          flexShrink: 0,
        }}>⌄</span>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div style={{ borderTop: `1px solid var(--border)` }}>
          {/* Tabs */}
          <div style={{
            display: "flex",
            gap: 6,
            padding: "12px 20px",
            background: "var(--surface2)",
            borderBottom: "1px solid var(--border)"
          }}>
            <button style={tabStyle(tab === "problem")} onClick={() => setTab("problem")}>Problem</button>
            <button style={tabStyle(tab === "code")} onClick={() => setTab("code")}>Source Code</button>
            {canRun.includes(topic) && (
              <button style={tabStyle(tab === "output")} onClick={() => setTab("output")}>▶ Output</button>
            )}
            {!canRun.includes(topic) && (
              <span style={{
                marginLeft: "auto",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "var(--text-muted)",
                alignSelf: "center",
                background: "var(--border)",
                padding: "4px 10px",
                borderRadius: 20,
              }}>
                {topic === "php" ? "⚙ Server-side" : "⚛ Component"}
              </span>
            )}
          </div>

          {/* Tab Content */}
          <div style={{ padding: "20px" }}>
            {tab === "problem" && (
              <div style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "var(--text-dim)",
                background: "var(--surface2)",
                padding: "16px 20px",
                borderRadius: 8,
                borderLeft: `3px solid ${accent}`,
                whiteSpace: "pre-wrap",
              }}>
                {question.problem}
              </div>
            )}

            {tab === "code" && (
              <div style={{ borderRadius: 8, overflow: "hidden", fontSize: 13 }}>
                <div style={{
                  background: "#1a1a2e",
                  padding: "8px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  borderBottom: "1px solid var(--border)"
                }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444", display: "inline-block" }}/>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#eab308", display: "inline-block" }}/>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block" }}/>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--text-muted)", marginLeft: 8 }}>
                    {question.filename || `${index + 1}.${topic === "react" ? "jsx" : topic}`}
                  </span>
                </div>
                <SyntaxHighlighter
                  language={langMap[topic]}
                  style={atomOneDark}
                  showLineNumbers
                  customStyle={{ margin: 0, borderRadius: 0, background: "#0d1117", fontSize: 13 }}
                >
                  {question.code}
                </SyntaxHighlighter>
              </div>
            )}

            {tab === "output" && canRun.includes(topic) && (
              <OutputViewer code={question.code} topic={topic} accent={accent} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}