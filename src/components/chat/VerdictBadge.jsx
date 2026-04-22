export default function VerdictBadge({ verdict }) {
  const colors = {
    malicious:  { bg: "rgba(255,50,50,0.15)",  border: "#ff3232", text: "#ff6464", label: "⚠ MALICIEUX" },
    clean:      { bg: "rgba(0,255,120,0.15)",  border: "#00e070", text: "#00e070", label: "✓ PROPRE"    },
    suspicious: { bg: "rgba(255,165,0,0.15)",  border: "#ffa500", text: "#ffa500", label: "⚡ SUSPECT"  },
  };
  const c = colors[verdict] || colors.suspicious;
  return (
    <span style={{
      padding: "2px 10px", borderRadius: "4px",
      background: c.bg, border: `1px solid ${c.border}`,
      color: c.text, fontSize: "11px", fontWeight: "700", letterSpacing: "2px",
    }}>
      {c.label}
    </span>
  );
}