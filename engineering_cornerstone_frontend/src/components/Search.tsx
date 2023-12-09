import NavBar from "./NavBar/NavBar";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = searchQuery.replace(/\s+/g, '+');
    setSubmittedQuery(formattedQuery);
  };

  useEffect(() => {
    if (submittedQuery) {
      fetch(`http://127.0.0.1:8000/reading-hub/articles/all/?search=${submittedQuery}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error("Error fetching article data:", error);
        });
    }
  }, [submittedQuery]);

  return (
    <div className="container">
      <NavBar />
      <form className="d-flex mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      {Array.isArray(searchResults) && searchResults.length > 0 && (
        <div className="mt-3">
            {searchResults.map((result) => (
            <div key={result.id}>
                <p>ID: {result.id}</p>
                <p>Title: {result.title}</p>
                {/* Render other properties as needed */}
            </div>
            ))}
        </div>
        )}
    </div>
  );
};

export default Search;
