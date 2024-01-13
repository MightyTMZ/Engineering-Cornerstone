import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
// import Background1 from "./background1.png";
// import Background2 from "./background2.png";
import Background3 from "./background3.png";
// import Background4 from "./background4.png";
// import Background5 from "./background5.png";
import Background6 from "./background6.png";
import Background7 from "./background7.jpg";

interface Author {
  first_name: string;
  last_name: string;
  profile_picture_url: string;
}

interface Article {
  id: number;
  authors: Author[];
  created_at_date: string;
  image_url: string;
  slug: string;
  title: string;
  content: string;
  content_just_text: string;
}

const LandingPage = () => {
  // Sample data for the recent articles

  const backendServerAddress = "http://127.0.0.1:8000";

  const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch(`${backendServerAddress}/reading-hub/articles/trending/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Article[]) => {
        setTrendingArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch(`${backendServerAddress}/reading-hub/articles/all/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Article[]) => {
        setRecentArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  const [biographyArticles, setBiographyArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch(
      `${backendServerAddress}/reading-hub/articles/all/?tags__label__icontains=biography`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Article[]) => {
        setBiographyArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );

    return formattedDate;
  };

  const jumbotrons = [
    // Background1,
    // Background2,
    Background3,
    // Background4,
    // Background5,
    Background6,
    Background7,
  ];

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <NavBar />
          <p className="pt-3">
            Connect with the vast engineering world to learn about news,
            insights and more!
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="trending-articles">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-3 text-danger">Trending</h2>
              {trendingArticles.slice(0, 3).map((article) => (
                <div key={article.id}>
                  <a
                    href={`/#/articles/${article.created_at_date}/${article.slug}`}
                    className="trending-article"
                  >
                    {article.title}
                  </a>
                  <p className="text-success">
                    {formatDate(article.created_at_date)}
                  </p>
                  <p>{article.content_just_text.slice(0, 75)}...</p>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <img
                src={jumbotrons[Math.round(2 * Math.random())]}
                alt="Engineering Image"
                className="img-fluid"
              />
              <p className="mt-2">
                The world of engineering has come a long way, but it still has a
                long way to go. As we stand on the shoulders of past
                innovations, the blueprint for the future unfolds, waiting for
                the creators of tomorrow to design the next chapter.
              </p>
            </div>
          </div>
          <hr style={{ height: "2px" }} />
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="recent-articles pt-5">
        <div className="container">
          <h2 className="pb-2">Recently Added</h2>
          <div className="row">
            {recentArticles.slice(0, 3).map((article, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div
                  className="recent-article-box"
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "20px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column", // Set flex-direction to column
                    alignItems: "flex-start", // Align items to the start (left)
                    textAlign: "left", // Align text to the left
                    paddingBottom: "20px",
                  }}
                >
                  <a
                    href={
                      "#/articles/" +
                      article.created_at_date +
                      "/" +
                      article.slug
                    }
                    className="recent-article-link"
                  >
                    {article.title}
                  </a>
                  <p>
                    By{" "}
                    {article.authors
                      .map(
                        (author: any) =>
                          `${author.first_name} ${author.last_name}`
                      )
                      .join(", ")}
                  </p>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      src={article.image_url}
                      alt={article.title}
                      style={{ height: "75px", marginRight: "10px" }}
                    />
                    <p>{article.content_just_text.slice(0, 75)}...</p>
                  </div>
                  <p className="text-white">
                    {formatDate(article.created_at_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features mt-4">
        <div className="container">
          <h2 className="mb-4">Key Features</h2>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <h4>Breaking News</h4>
              <p>
                Stay up-to-date with the latest breaking news in the
                fast-evolving engineering world we have today.
              </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>In-Depth Analysis</h4>
              <p>
                Explore in-depth articles and analysis on engineering topics and
                innovations.
              </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Community Engagement</h4>
              <p>
                Connect with fellow engineers and professionals in our vibrant
                community.
              </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Incredible Insights</h4>
              <p>
                Hear the insighful voices and inspiration of aspiring, current,
                or former engineers.{" "}
              </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Learning</h4>
              <p>
                Learn about how the inventions of the past centuries brought us
                to the engineering world we have today!
              </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Innovation Unveiled</h4>
              <p>
                Discover the latest tech trends reshaping engineering and how it
                can inspire you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Experiences They Had/Shared (biographies) section */}
      <section className="experiences-they-shared pt-5">
        <div className="container">
          <h2 className="pb-2">The Experiences They Shared</h2>
          <div className="row">
            {biographyArticles.slice(0, 3).map((article, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div
                  className="recent-article-box"
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "20px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column", // Set flex-direction to column
                    alignItems: "flex-start", // Align items to the start (left)
                    textAlign: "left", // Align text to the left
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    src={article.image_url}
                    alt={article.title}
                    style={{ width: "100%" }}
                    className="pb-2"
                  />
                  <a
                    href={
                      "#/articles/" +
                      article.created_at_date +
                      "/" +
                      article.slug
                    }
                    className="recent-article-link"
                  >
                    {article.title}
                  </a>
                  <p>
                    By{" "}
                    {article.authors
                      .map(
                        (author: any) =>
                          `${author.first_name} ${author.last_name}`
                      )
                      .join(", ")}
                  </p>

                  <p className="text-white">
                    {formatDate(article.created_at_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section 
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Receive the latest news and updates directly to your inbox.</p>
          Add a newsletter signup form here
        </div>
      </section>*/}

      {/* Blank Div Box 2 
      <section
        className="blank-box"
        style={{ width: "100%", height: "180px", backgroundColor: "blue" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blank-box-content">
                Add Content here!!
              </div>
            </div>
          </div>
        </div>
      </section> 
    
    */}

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Engineering Cornerstone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
