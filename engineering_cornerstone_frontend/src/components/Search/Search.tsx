import NavBar from "../NavBar/NavBar";
import { Fragment } from "react";
import { ChangeEvent, FormEvent } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NotFound from "./not_found_icon.png";
import "./Search.css";

interface Author {
  id: number;
  first_name: string;
  last_name: string;
}

interface Category {
  id: number;
  title: string;
}

interface Article {
  id: number;
  created_at_date: string;
  authors: Author[];
  category: Category[];
  slug: string;
  title: string;
  content: string;
  content_just_text: string;
  image_url: string;
}

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const navigate = useNavigate(); // Use the useNavigate hook
  const location = useLocation();

  useEffect(() => {
    // Extract the search query from the URL parameter
    const queryParam = new URLSearchParams(location.search).get("q");

    // Set the initial value of searchQuery based on the query parameter
    setSearchQuery(queryParam || "");

    // Fetch data from the backend based on the search query
    if (queryParam) {
      fetchSearchResults(queryParam);
    }
  }, [location.search]);
  const backendServerAddress =
    "https://engineeringcornerstone.pythonanywhere.com";

  const fetchSearchResults = (query: string) => {
    fetch(
      `${backendServerAddress}/reading-hub/articles/all/?search=${encodeURIComponent(
        query
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSearchResults(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedQuery = searchQuery.replace(/\s+/g, "+");

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
          {searchResults.map((result) => (
            <div className="search-result-card" key={result.id}>
              <div className="search-result-content">
                <a
                  className="search-result-title"
                  style={{ textDecoration: "none" }}
                  href={
                    "/#/articles/" + result.created_at_date + "/" + result.slug
                  }
                >
                  {result.title}
                </a>
                <div className="search-result-meta">
                  {result.created_at_date} | By&nbsp;
                  {result.authors.length === 1 ? (
                    <>
                      {" "}
                      {result.authors[0].first_name}{" "}
                      {result.authors[0].last_name}
                    </>
                  ) : (
                    result.authors.map((author, authorIndex) => (
                      <span key={author.id}>
                        {author.first_name} {author.last_name}
                        {authorIndex !== result.authors.length - 1 && ", "}
                      </span>
                    ))
                  )}
                </div>
                <div className="search-result-description">
                  {result.content_just_text.slice(0, 75)}...
                </div>
                {result.category.length === 1 ? (
                  <div className="search-result-category">
                    {result.category[0].title}
                  </div>
                ) : (
                  <div className="search-result-category">
                    {result.category.map((cat, catIndex) => (
                      <span key={cat.id}>
                        {cat.title}
                        {catIndex !== result.category.length - 1 && (
                          <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <img
                className="search-result-image"
                src={result.image_url}
                alt="Article Image"
                style={{ width: "200px" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <Fragment>
          <h3>
            <br />
            Your search bar is likely empty or we were unable to find relevant
            results. Please consider changing search keywords.
          </h3>
          <img src={NotFound} alt="" />
        </Fragment>
      )}
    </div>
  );
};

export default Search;
