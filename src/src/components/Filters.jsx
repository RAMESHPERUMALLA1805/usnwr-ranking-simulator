export default function Filters() {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h3>Filters</h3>

      <label>Hospital</label>
      <select>
        <option>Lurie</option>
      </select>

      <br /><br />

      <label>Year</label>
      <select>
        <option>2024</option>
        <option>2023</option>
      </select>

      <br /><br />

      <label>Specialty</label>
      <select>
        <option>Cancer</option>
      </select>
    </div>
  );
}
