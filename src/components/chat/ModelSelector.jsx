import { useState, useRef, useEffect } from "react";
import { t } from "./chatTheme";

export const MODELS = [
  { id: "phi3-mini",  label: "Phi-3 Mini",  desc: "Rapide · Léger"     },
  { id: "gemma3",     label: "Gemma 3",     desc: "Équilibré · Précis"  },
];

export default function ModelSelector({ darkMode, selectedModel, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const th = t(darkMode);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = MODELS.find(m => m.id === selectedModel) || MODELS[0];

  return (
    <div ref={ref} style={{ position: "relative", flexShrink: 0 }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: "transparent",
          border: `1px solid ${open ? th.borderActive : th.border}`,
          borderRadius: "5px",
          padding: "4px 8px",
          color: th.textMuted,
          fontSize: "10px", letterSpacing: "1px",
          cursor: "pointer",
          fontFamily: "'Courier New', monospace",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{
          width: "5px", height: "5px", borderRadius: "50%",
          background: th.accent,
          boxShadow: `0 0 5px ${th.accent}`,
          flexShrink: 0,
        }} />
        <span style={{ color: th.accent, fontWeight: "600" }}>{current.label}</span>
        <span style={{
          marginLeft: "2px",
          display: "inline-block",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
          fontSize: "8px",
          color: th.textMuted,
        }}>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: "absolute",
          bottom: "calc(100% + 6px)",
          left: 0,
          minWidth: "180px",
          background: darkMode ? "#041009" : "#f3faf5",
          border: `1px solid ${th.borderActive}`,
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: `0 8px 24px rgba(0,0,0,0.35), 0 0 0 1px ${th.accentGlow}`,
          zIndex: 50,
          animation: "fadeInUp 0.15s ease",
        }}>
          <div style={{
            padding: "6px 10px 4px",
            fontSize: "9px", letterSpacing: "2px",
            color: th.textFaint,
            borderBottom: `1px solid ${th.border}`,
          }}>
            MODÈLE IA
          </div>
          {MODELS.map(m => (
            <button
              key={m.id}
              onClick={() => { onSelect(m.id); setOpen(false); }}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "8px 12px",
                background: selectedModel === m.id ? th.accentSubtle : "transparent",
                border: "none",
                borderLeft: selectedModel === m.id
                  ? `2px solid ${th.accent}`
                  : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "'Courier New', monospace",
              }}
            >
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                color: selectedModel === m.id ? th.accent : th.text,
              }}>
                {m.label}
              </div>
              <div style={{ fontSize: "9px", color: th.textFaint, marginTop: "1px" }}>
                {m.desc}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}