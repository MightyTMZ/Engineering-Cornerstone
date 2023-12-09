import NavBar from "./NavBar/NavBar";
import { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = searchQuery.replace(/\s+/g, '+');
    setSubmittedQuery(formattedQuery);
    setSearchQuery(''); // Clear the input after submission
  };

  return (
    <div className="container">
      <NavBar></NavBar>
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

      {submittedQuery && (
        <div className="mt-3">
          <p>Submitted Query: {submittedQuery}</p>
          {/* You can perform further actions or render components based on the submittedQuery */}
        </div>
      )}
    </div>
  );
};

export default Search;
