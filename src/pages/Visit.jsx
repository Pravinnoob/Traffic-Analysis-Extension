import { useContext } from "react";  // import useContext to consume context
import { apiContext } from "../context/apiContext"; // import your custom context
import "./Visit.css"; // custom styling

function Visit() {
  // Destructure the values you need from context
  const { visitPage, numbers } = useContext(apiContext);

  return (
    <div className="visit-container">
      {/* Header Section */}
      <div className="visit-header">
        <h1>🌍 Global Rank : {visitPage.globalrank}</h1>
        <h1>📌 Site Name : {visitPage.sitename}</h1>
      </div>

      {/* Visits List */}
      <div className="visit-list">
        {numbers.map((item, index) => (
          <div key={index} className="visit-card">
            {/* Date of the visit data */}
            <h2>{item.date}</h2>

            {/* Number of visits (formatted with commas) */}
            <p>Visits: {item.visits.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visit;

