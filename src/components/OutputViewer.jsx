import { useRef, useEffect, useState } from "react";

export default function OutputViewer({ code, topic, accent }) {
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const iframe = iframeRef.current;
    if (!iframe) return;

    let content = "";

    if (topic === "html") {
      content = code;
    } else if (topic === "css") {
      content = code;
    } else if (topic === "js") {
      content = code;
    }

    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframe.src = url;
    iframe.onload = () => setLoaded(true);

    return () => URL.revokeObjectURL(url);
  }, [code, topic]);

  return (
    <div>
      <div style={{
        background: "var(--surface2)",
        borderRadius: "8px 8px 0 0",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid var(--border)",
        borderBottom: "none"
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%",
          background: loaded ? "var(--green)" : "var(--text-muted)",
          display: "inline-block",
          transition: "background 0.3s"
        }}/>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: "var(--text-muted)"
        }}>Live Output</span>
      </div>
      <iframe
        ref={iframeRef}
        title="output"
        style={{
          width: "100%",
          height: 420,
          border: `1px solid var(--border)`,
          borderRadius: "0 0 8px 8px",
          background: "#fff",
        }}
        sandbox="allow-scripts"
      />
    </div>
  );
}