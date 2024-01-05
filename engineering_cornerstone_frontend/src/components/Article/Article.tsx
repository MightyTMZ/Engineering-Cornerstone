import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import NavBar from "../NavBar/NavBar";
import "./Article.css";

{
  /* interface ArticleProps {
  title: string;
  slug: string;
  image_url: string;
  category: string;
  content: string;
  author: string;
  createdAt: string;
  createdAt_date: string;
  trending?: boolean;
}*/
}

const Article: React.FC = () => {
  const { created_at_date, slug } = useParams();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/reading-hub/articles/${created_at_date}/${slug}/`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      });
  }, []);

  if (!article) {
    return <p>Loading...</p>;
  }

  let title = article.title;
  let authors = article.authors;
  let trending = article.trending;
  let image_url = article.image_url;
  let content = article.content;
  let createdAt = article.created_at_date;

  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <>
      <div className="container-fluid mb-5">
        <NavBar />
        {/*  */}
        <div
          className={
            window.innerWidth > 800 ? "container" : "article-container"
          }
          style={{ paddingRight: "20%", paddingLeft: "20%", marginTop: "2rem" }}
        >
          <h1>{title}</h1>
          <p>{createdAt}</p>
          {trending && (
            <span className="text-danger font-weight-bold">TRENDING</span>
          )}
          <p className="mt-4">
            By{" "}
            {authors
              .map((author: any) => `${author.first_name} ${author.last_name}`)
              .join(", ")}
          </p>
          <img
            src={image_url}
            alt="Image jumbotron"
            className="img-fluid mb-3"
            style={{ width: "100%" }}
          />
          <article dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </>
  );
};

export default Article;
