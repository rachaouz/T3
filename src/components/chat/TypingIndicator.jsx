import { t } from "./chatTheme";

export default function TypingIndicator({ darkMode }) {
  const th = t(darkMode);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
      <div style={{
        width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
        background: darkMode
          ? `linear-gradient(135deg, ${th.accentDim}, ${th.accent})`
          : `linear-gradient(135deg, ${th.accentDim}, ${th.accentAlt})`,
        border: `1px solid ${th.borderActive}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px",
      }}>🛡</div>
      <div style={{
        background: th.botBubble,
        border: `1px solid ${th.border}`,
        borderRadius: "12px 12px 12px 2px",
        padding: "12px 20px",
        display: "flex", gap: "6px", alignItems: "center",
      }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: th.accent,
            animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}