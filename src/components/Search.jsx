import { useContext, useReducer, useRef } from "react";
import "./Search.css"; 
import { apiContext } from "../context/apiContext";
import { toast } from "react-toastify";

function Search() {
  const { setDomain } = useContext(apiContext);
  const domainStore = useRef();

  //  Handle search submission
  function handleStore(e) {
    const storeData = domainStore.current.value; 

    if (storeData === "") {
      toast.error("Please fill input...");
      return; 
    }

    
    if (!storeData.includes(".com")) {
      toast.error("Please search a valid site");
      return; 
    }

    setDomain(storeData);

    domainStore.current.value = "";
  }

  return (
    <div className="search-box">
      <input
        type="text"
        ref={domainStore}
        placeholder="Ex. github.com"
        className="search-input"
      />
      <button onClick={handleStore} className="search-btn">
        Submit
      </button>
    </div>
  );
}

export default Search;

