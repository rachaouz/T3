import ModelSelector from "./ModelSelector";
import { t } from "./chatTheme";

export default function ChatInput({
  darkMode, input, loading,
  selectedModel, onModelChange,
  onInputChange, onKeyDown, onSend,
}) {
  const th = t(darkMode);
  const canSend = input.trim() && !loading;

  return (
    <div style={{
      padding: "12px 16px",
      borderTop: `1px solid ${th.border}`,
      flexShrink: 0,
      background: darkMode ? "rgba(3,14,7,0.95)" : "rgba(243,250,245,0.97)",
    }}>
      <div style={{
        display: "flex", flexDirection: "column",
        background: th.input,
        border: `1px solid ${input ? th.borderActive : th.border}`,
        borderRadius: "10px",
        padding: "8px 8px 6px 14px",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: input ? `0 0 14px ${th.accentGlow}` : "none",
      }}>
        {/* Text + send button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            value={input}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
            placeholder="Entrez un IOC (hash, IP, URL, domaine, CVE)..."
            style={{
              flex: 1,
              background: "transparent", border: "none", outline: "none",
              color: th.text, fontSize: "12px",
              fontFamily: "'Courier New', monospace", letterSpacing: "0.5px",
            }}
          />
          <button
            onClick={onSend}
            disabled={!canSend}
            style={{
              padding: "8px 18px",
              background: canSend
                ? `linear-gradient(135deg, ${th.accentDim}, ${th.accent})`
                : th.accentSubtle,
              border: "none", borderRadius: "7px",
              color: canSend ? "#fff" : th.textFaint,
              fontSize: "11px", letterSpacing: "2px",
              cursor: canSend ? "pointer" : "not-allowed",
              fontFamily: "'Courier New', monospace",
              fontWeight: "700", transition: "all 0.2s",
              boxShadow: canSend ? `0 0 10px ${th.accentGlow}` : "none",
              whiteSpace: "nowrap",
            }}
          >
            ▶ ANALYSER
          </button>
        </div>

        {/* Model selector row */}
        <div style={{
          display: "flex", alignItems: "center",
          paddingTop: "5px",
          borderTop: `1px solid ${th.border}`,
          marginTop: "4px",
        }}>
          <ModelSelector
            darkMode={darkMode}
            selectedModel={selectedModel}
            onSelect={onModelChange}
          />
        </div>
      </div>
    </div>
  );
}