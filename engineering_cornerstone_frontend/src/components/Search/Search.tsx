import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Use the useNavigate hook
  const location = useLocation();

  useEffect(() => {
    // Extract the search query from the URL parameter
    const queryParam = new URLSearchParams(location.search).get('q');

    // Set the initial value of searchQuery based on the query parameter
    setSearchQuery(queryParam || '');

    // Fetch data from the backend based on the search query
    if (queryParam) {
      fetchSearchResults(queryParam);
    }
  }, [location.search]);

  const fetchSearchResults = (query) => {
    fetch(`http://127.0.0.1:8000/reading-hub/articles/all/?search=${encodeURIComponent(query)}`)
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
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = searchQuery.replace(/\s+/g, '+');

    // Fetch data from the backend based on the search query
    fetchSearchResults(formattedQuery);

    // Update the URL when the user submits the form
    navigate(`/search?q=${formattedQuery}`);
  };

  // we inplemented a mechanism which only retrieves a query set when the user submits the search
  // this way we don't get an overloaded amount of requests on the backend server

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

      {Array.isArray(searchResults) && searchResults.length > 0 ? (
        <div className="mt-3">
          {searchResults.map((result, index) => (
            <div className="search-result-card" key={result.id}>
              <div className="search-result-content">
                <a className="search-result-title" 
                style={{textDecoration: "none"}}
                href={"/articles/" + result.created_at_date + '/' + result.slug}>{result.title}</a>
                <div className="search-result-meta">
                  {result.created_at_date} | By&nbsp;
                  {result.authors.length === 1 ? (
                    <> {result.authors[0].first_name} {result.authors[0].last_name}</>
                  ) : (
                    result.authors.map((author, authorIndex) => (
                      <span key={author.id}>
                        {author.first_name} {author.last_name}
                        {authorIndex !== result.authors.length - 1 && ", "}
                      </span>
                    ))
                  )}
                </div>
                <div className="search-result-description">{result.content_just_text}</div>
                {result.category.length === 1 ? (
                  <div className="search-result-category">{result.category[0].title}</div>
                ) : (
                  <div className="search-result-category">
                    {result.category.map((cat, catIndex) => (
                      <span key={cat.id}>
                        {cat.title}
                        {catIndex !== result.category.length - 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <img className="search-result-image" src={result.image_url} alt="Article Image" style={{width: "200px"}}/>
            </div>
          ))}
        </div>
      ) : (
        <h3><br/>No results found</h3>
      )}
    </div>
  );
};

export default Search;
