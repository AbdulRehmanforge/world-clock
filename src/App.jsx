import "./App.css";
import Clock from "./Clock.jsx";

export default function App() {
  const clocks =[
    { city: "Los Angeles", timeZone: "America/Los_Angeles" },
    { city: "New York", timeZone: "America/New_York" },
    { city: "London", timeZone: "Europe/London" },
    { city: "Tokyo", timeZone: "Asia/Tokyo" },  
  ]

  return (
    <>
      <h1>World Clock</h1>
      <div className="card">
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif"
        }}>
          <thead>
            <tr style={{ 
              borderBottom: "3px solid #333",
              backgroundColor: "#060505",
              color: "white"
            }}>
              <th style={{ textAlign: "left", padding: "15px", fontWeight: "bold" }}>City</th>
              <th style={{ textAlign: "left", padding: "15px", fontWeight: "bold" }}>Date</th>
              <th style={{ textAlign: "left", padding: "15px", fontWeight: "bold" }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {clocks.map(({ city, timeZone }) => (
              <tr key={city} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "15px", fontWeight: "500" }}>{city}</td>
                <td style={{ padding: "15px" }}>
                  <Clock timeZone={timeZone} showDate={true} />
                </td>
                <td style={{ padding: "15px", fontFamily: "monospace", fontSize: "18px" }}>
                  <Clock timeZone={timeZone} showDate={false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
