import { t } from "./chatTheme";

const IOC_TYPES = ["HASH", "IP", "URL", "DOMAIN", "CVE"];

export default function ChatTopBar({
  darkMode, sidebarOpen,
  onToggleSidebar, onOpenSettings,
  activeIOC, onSelectIOC,
}) {
  const th = t(darkMode);

  return (
    <div style={{
      borderBottom: `1px solid ${th.border}`,
      flexShrink: 0,
      background: darkMode ? "rgba(3,14,7,0.95)" : "rgba(243,250,245,0.97)",
    }}>
      {/* Row 1 : hamburger + settings */}
      <div style={{
        height: "52px",
        display: "flex", alignItems: "center",
        padding: "0 16px", gap: "10px",
      }}>
        <button
          onClick={onToggleSidebar}
          style={{
            background: "transparent", border: "none",
            color: th.accent, cursor: "pointer",
            fontSize: "18px", padding: "4px", lineHeight: 1,
          }}
        >
          ☰
        </button>

        <div style={{ flex: 1 }} />

        {/* ⚙ Settings — top right */}
        <button
          onClick={onOpenSettings}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: "transparent",
            border: `1px solid ${th.border}`,
            borderRadius: "6px",
            padding: "5px 12px",
            color: th.textMuted, fontSize: "11px",
            letterSpacing: "1.5px", cursor: "pointer",
            fontFamily: "'Courier New', monospace",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = th.borderActive;
            e.currentTarget.style.color = th.accent;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = th.border;
            e.currentTarget.style.color = th.textMuted;
          }}
        >
          ⚙ PARAMÈTRES
        </button>
      </div>

      {/* Row 2 : IOC chips */}
      <div style={{
        padding: "0 16px 10px",
        display: "flex", gap: "8px", flexWrap: "wrap",
      }}>
        {IOC_TYPES.map(type => (
          <button
            key={type}
            onClick={() => onSelectIOC(type)}
            style={{
              padding: "5px 14px",
              background: activeIOC === type ? th.accentSubtle : "transparent",
              border: activeIOC === type
                ? `1px solid ${th.accent}`
                : `1px solid ${th.border}`,
              borderRadius: "4px",
              color: activeIOC === type ? th.accent : th.textMuted,
              fontSize: "11px", letterSpacing: "2px", cursor: "pointer",
              fontFamily: "'Courier New', monospace",
              fontWeight: activeIOC === type ? "700" : "400",
              transition: "all 0.2s",
              boxShadow: activeIOC === type ? `0 0 8px ${th.accentGlow}` : "none",
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}