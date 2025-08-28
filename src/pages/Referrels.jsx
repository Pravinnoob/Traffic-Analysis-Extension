import { useContext } from "react";
import { apiContext } from "../context/apiContext";
import "./Referrels.css"; // ✅ Styling file for layout & cards

function Referrels() {
  const { referrersPage } = useContext(apiContext);

  // ✅ Handle loading state when data is not ready
  if (!referrersPage) return <p>Loading referrers...</p>;

  // ✅ Build sources array (using nullish coalescing in case some fields are missing)
  const sources = [
    { name: "Direct", value: referrersPage.Direct ?? 0 },
    { name: "Mail", value: referrersPage.Mail ?? 0 },
    { name: "Referrals", value: referrersPage.Referrals ?? 0 },
    { name: "Search", value: referrersPage.Search ?? 0 },
    { name: "Social", value: referrersPage.Social ?? 0 },
    { name: "Paid Referrals", value: referrersPage["Paid Referrals"] ?? 0 },
  ];

  return (
    <div className="referrals-container">
      <h1>Traffic Sources</h1>
      <div className="referrals-list">
        {sources.map((src) => ( // ✅ Use src.name instead of index for better React keys
          <div key={src.name} className="referral-card">
            <h2>{src.name}</h2>
            {/* ✅ Convert fraction (0.23) into percentage (23.00%) */}
            <p>{(src.value * 100).toFixed(2)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Referrels;

