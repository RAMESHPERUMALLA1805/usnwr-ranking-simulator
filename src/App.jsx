import Filters from "./components/Filters";
import KPI from "./components/KPI";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏥 USNWR Hospital Ranking Simulator</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ width: "25%" }}>
          <Filters />
        </div>

        <div style={{ width: "75%" }}>
          <KPI />
        </div>
      </div>
    </div>
  );
}
