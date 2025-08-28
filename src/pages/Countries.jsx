import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import "./Countries.css"; // ✅ Import CSS for styling

function Countries() {
  const { countryPage } = useContext(apiContext);

  // ✅ Handle case when countryPage is empty or still loading
  if (!countryPage || countryPage.length === 0) {
    return <p>Loading top countries...</p>;
  }

  return (
    <div className="countries-container">
      <h1>Top Countries</h1>
      {countryPage.map((item, index) => (
        <div key={index} className="country-card">
          {/* ✅ Show country name */}
          <h2>Country: {item.Country}</h2>
          {/* ✅ Country code (like IN, US, UK) */}
          <h2>Code: {item.CountryCode}</h2>
          {/* ✅ Value (visits/percentage/etc depending on API) */}
          <h2>Value: {item.Value}</h2>
        </div>
      ))}
    </div>
  );
}

export default Countries;

