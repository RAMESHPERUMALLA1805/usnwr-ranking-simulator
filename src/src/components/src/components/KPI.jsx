export default function KPI() {
  return (
    <div>
      <h3>KPI Dashboard</h3>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Card title="Current Score" value="78.5" />
        <Card title="Current Rank" value="15" />
        <Card title="Target Rank" value="10" />
        <Card title="Score Gap" value="4.2" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      width: "150px",
      textAlign: "center"
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
