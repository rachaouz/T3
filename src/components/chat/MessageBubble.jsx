import ThreatReport from "./ThreatReport";
import { t } from "./chatTheme";

export default function MessageBubble({ msg, darkMode }) {
  const th = t(darkMode);
  const isUser = msg.role === "user";

  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: "16px",
      animation: "fadeInUp 0.3s ease",
    }}>
      {!isUser && (
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
          marginRight: "10px",
          background: darkMode
            ? `linear-gradient(135deg, ${th.accentDim}, ${th.accent})`
            : `linear-gradient(135deg, ${th.accentDim}, ${th.accentAlt})`,
          border: `1px solid ${th.borderActive}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "14px",
          boxShadow: `0 0 12px ${th.accentGlow}`,
        }}>🛡</div>
      )}

      <div style={{ maxWidth: "75%" }}>
        <div style={{
          background: isUser ? th.userBubble : th.botBubble,
          border: `1px solid ${isUser ? th.borderActive : th.border}`,
          borderRadius: isUser ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
          padding: "12px 16px",
          color: th.text,
          fontSize: "13px", lineHeight: "1.6",
          fontFamily: "'Courier New', monospace",
        }}>
          {msg.content}
        </div>

        {msg.report && <ThreatReport data={msg.report} darkMode={darkMode} />}

        <div style={{
          fontSize: "10px", color: th.textFaint,
          marginTop: "4px", letterSpacing: "1px",
          textAlign: isUser ? "right" : "left",
        }}>
          {msg.timestamp}
        </div>
      </div>
    </div>
  );
}