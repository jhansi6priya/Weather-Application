export default function HighlightCard({ label, value, unit, icon }) {
  return (
    <div className="highlight-card">
      <p className="highlight-label">{label}</p>
      <h2 className="highlight-value">
        {value}
        {unit && <span>{unit}</span>}
      </h2>
      <span className="highlight-icon">{icon}</span>
    </div>
  );
}
