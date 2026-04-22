import { useNavigate } from "react-router-dom";
import { t } from "./chatTheme";

export default function SettingsModal({ onClose, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const th = t(darkMode);

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.65)",
        zIndex: 999,
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: darkMode ? "#041009" : "#f3faf5",
          border: `1px solid ${th.borderActive}`,
          borderRadius: "12px", padding: "28px", width: "340px",
          fontFamily: "'Courier New', monospace",
          boxShadow: `0 0 40px ${th.accentGlow}, 0 20px 60px rgba(0,0,0,0.4)`,
          animation: "fadeInUp 0.2s ease",
        }}
      >
        {/* Title */}
        <div style={{
          color: th.accent, letterSpacing: "3px",
          fontSize: "13px", marginBottom: "20px", fontWeight: "700",
        }}>
          ⚙ PARAMÈTRES
        </div>

        {/* User card */}
        <div style={{
          background: th.accentSubtle,
          border: `1px solid ${th.border}`,
          borderRadius: "8px", padding: "12px", marginBottom: "12px",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            background: `linear-gradient(135deg, ${th.accentDim}, ${th.accent})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px",
            boxShadow: `0 0 12px ${th.accentGlow}`,
          }}>👤</div>
          <div>
            <div style={{ color: th.text, fontSize: "13px", fontWeight: "700" }}>Analyste SOC</div>
            <div style={{ color: th.textMuted, fontSize: "11px" }}>analyst@mobilis.dz</div>
          </div>
        </div>

        {/* Dark/Light toggle */}
        <div
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px",
            background: th.accentSubtle,
            border: `1px solid ${th.border}`,
            borderRadius: "8px", marginBottom: "12px", cursor: "pointer",
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          <span style={{ color: th.text, fontSize: "12px", letterSpacing: "1px" }}>
            {darkMode ? "🌙 Mode Sombre" : "☀️ Mode Clair"}
          </span>
          <div style={{
            width: "40px", height: "22px", borderRadius: "11px",
            background: th.accent, position: "relative", transition: "all 0.3s",
          }}>
            <div style={{
              width: "18px", height: "18px", borderRadius: "50%",
              background: "#fff", position: "absolute", top: "2px",
              left: darkMode ? "20px" : "2px", transition: "all 0.3s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }} />
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/auth")}
          style={{
            width: "100%", padding: "10px",
            background: "rgba(255,50,50,0.08)",
            border: "1px solid rgba(255,50,50,0.28)",
            borderRadius: "8px", color: "#ff6464", fontSize: "12px",
            letterSpacing: "2px", cursor: "pointer",
            fontFamily: "'Courier New', monospace", transition: "all 0.2s",
          }}
        >
          ⏻ SE DÉCONNECTER
        </button>
      </div>
    </div>
  );
}