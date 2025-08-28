import { createContext, useEffect, useState } from "react";

export const apiContext = createContext({});

function MyContext({ children }) {
  const [domain, setDomain] = useState("");

  const [visitPage, setVisitPage] = useState({
    visit: "",
    sitename: "",
    globalrank: "",
  });

  //State for countries data
  const [countryPage, setCountryPage] = useState({});

  // State for referrer data
  const [referrersPage, setReferrersPage] = useState({});

  // Raw API response
  const [data, setData] = useState([]);

  // Converted visits array (formatted for charts)
  const [numbers, setNumbers] = useState([]);

  // Function to fetch data from SimilarWeb API
  const fetchingData = async () => {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://data.similarweb.com/api/v1/data?domain=${domain}`      //  i added the CORS link with the actual API link to temporarily test for demo server, please change the fetch link to "https://data.similarweb.com/api/v1/data?domain=${domain}" //
    );
    const data = await res.json();
    console.log(data); // Debugging

    // Save full API response
    setData(data);

    const visitData = data?.EstimatedMonthlyVisits || {};

    const formatted = Object.entries(visitData).map(([date, visits]) => ({
      date,
      visits,
    }));

    setVisitPage({
      visit: visitData,
      sitename: data?.SiteName,
      globalrank: data?.GlobalRank?.Rank,
    });

    setNumbers(formatted);

    setCountryPage(data?.TopCountryShares);

    setReferrersPage(data?.TrafficSources);
  };

  useEffect(() => {
    if (domain) {
      fetchingData();
    }
  }, [domain]);

  const value = {
    domain,
    setDomain,
    data,
    visitPage,
    numbers,
    countryPage,
    referrersPage,
  };

  return <apiContext.Provider value={value}>{children}</apiContext.Provider>;
}

export default MyContext;
