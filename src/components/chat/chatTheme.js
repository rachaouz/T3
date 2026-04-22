/**
 * SOCILIS · Chat Theme
 * Palette verte Mobilis — dark & light
 */

export const DARK = {
  bg:           "#030e07",
  sidebar:      "#041009",
  surface:      "rgba(0,35,15,0.85)",
  surfaceHover: "rgba(0,55,22,0.6)",
  border:       "rgba(0,195,80,0.15)",
  borderActive: "rgba(0,195,80,0.5)",
  accent:       "#00c850",
  accentAlt:    "#00ff7a",
  accentDim:    "#009438",
  accentGlow:   "rgba(0,200,80,0.18)",
  accentSubtle: "rgba(0,200,80,0.08)",
  text:         "#d4ffe3",
  textMuted:    "rgba(160,255,200,0.5)",
  textFaint:    "rgba(160,255,200,0.25)",
  userBubble:   "rgba(0,120,45,0.28)",
  botBubble:    "rgba(4,18,8,0.88)",
  input:        "rgba(0,22,10,0.92)",
  scrollThumb:  "rgba(0,200,80,0.2)",
};

export const LIGHT = {
  bg:           "#f3faf5",
  sidebar:      "#eaf5ee",
  surface:      "rgba(255,255,255,0.92)",
  surfaceHover: "rgba(228,246,234,0.85)",
  border:       "rgba(0,110,40,0.18)",
  borderActive: "rgba(0,110,40,0.5)",
  accent:       "#005c22",
  accentAlt:    "#007a2e",
  accentDim:    "#003d16",
  accentGlow:   "rgba(0,92,34,0.1)",
  accentSubtle: "rgba(0,92,34,0.06)",
  text:         "#0a1f10",
  textMuted:    "rgba(10,55,22,0.55)",
  textFaint:    "rgba(10,55,22,0.3)",
  userBubble:   "rgba(0,92,34,0.1)",
  botBubble:    "rgba(242,252,245,0.97)",
  input:        "rgba(255,255,255,0.97)",
  scrollThumb:  "rgba(0,92,34,0.18)",
};

export const t = (darkMode) => (darkMode ? DARK : LIGHT);