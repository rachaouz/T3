import { useState } from "react";
import VerdictBadge from "./VerdictBadge";
import { t } from "./chatTheme";

export default function ThreatReport({ data, darkMode }) {
  const [copied, setCopied] = useState(false);
  const th = t(darkMode);
  const score = data.score || 0;
  const scoreColor = score > 70 ? "#ff4444" : score > 40 ? "#ffa500" : "#00e070";

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      background: th.botBubble,
      border: `1px solid ${th.border}`,
      borderRadius: "8px", padding: "16px", marginTop: "8px",
      fontSize: "12px", fontFamily: "'Courier New', monospace",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <span style={{ color: th.accent, fontWeight: "700", letterSpacing: "2px" }}>
          ▶ THREAT INTELLIGENCE REPORT
        </span>
        <button onClick={handleCopy} style={{
          background: "transparent",
          border: `1px solid ${copied ? th.accentAlt : th.border}`,
          color: copied ? th.accentAlt : th.accent,
          padding: "3px 10px", borderRadius: "4px", fontSize: "10px",
          cursor: "pointer", letterSpacing: "1px", transition: "all 0.2s",
        }}>
          {copied ? "✓ COPIÉ" : "⎘ COPIER"}
        </button>
      </div>

      {/* IOC */}
      <div style={{ marginBottom: "10px" }}>
        <span style={{ color: th.textMuted, fontSize: "10px", letterSpacing: "2px" }}>IOC · </span>
        <span style={{ color: th.text }}>{data.ioc}</span>
      </div>

      {/* Score */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <VerdictBadge verdict={data.verdict} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ color: th.textFaint, fontSize: "10px", letterSpacing: "2px" }}>THREAT SCORE</span>
            <span style={{ color: scoreColor, fontWeight: "700" }}>{score}/100</span>
          </div>
          <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${score}%`,
              background: `linear-gradient(90deg, ${scoreColor}, ${scoreColor}aa)`,
              borderRadius: "2px", boxShadow: `0 0 6px ${scoreColor}`,
              transition: "width 1s ease",
            }} />
          </div>
        </div>
      </div>

      {/* CVEs */}
      {data.cves?.length > 0 && (
        <div style={{ marginBottom: "10px" }}>
          <div style={{ color: th.textMuted, fontSize: "10px", letterSpacing: "2px", marginBottom: "6px" }}>
            CVEs ASSOCIÉES
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {data.cves.map(c => (
              <span key={c} style={{
                padding: "2px 8px", background: "rgba(255,100,0,0.1)",
                border: "1px solid rgba(255,100,0,0.3)", borderRadius: "3px",
                color: "#ff8844", fontSize: "11px",
              }}>{c}</span>
            ))}
          </div>
        </div>
      )}

      {/* Sources */}
      {data.sources?.length > 0 && (
        <div>
          <div style={{ color: th.textMuted, fontSize: "10px", letterSpacing: "2px", marginBottom: "6px" }}>
            SOURCES
          </div>
          {data.sources.map(s => (
            <div key={s} style={{ color: th.textFaint, fontSize: "11px", marginBottom: "2px" }}>→ {s}</div>
          ))}
        </div>
      )}
    </div>
  );
}