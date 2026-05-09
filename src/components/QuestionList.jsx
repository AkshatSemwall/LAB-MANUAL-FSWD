import { useState } from "react";
import QuestionCard from "./QuestionCard";

export default function QuestionList({ questions, accent, topic }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {questions.map((q, i) => (
        <QuestionCard
          key={i}
          question={q}
          index={i}
          accent={accent}
          topic={topic}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}