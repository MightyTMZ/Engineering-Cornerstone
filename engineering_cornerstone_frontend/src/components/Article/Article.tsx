import React from 'react';
import DOMPurify from 'dompurify';
import './Article.css';

interface ArticleProps {
  title: string;
  image_url: string;
  content: string;
  author: string;
  createdAt: string; // Assuming createdAt is a string, you might want to use a Date type
  trending?: boolean; // Assuming trending is optional and boolean
}

const Article: React.FC<ArticleProps> = ({ title, image_url, content, author, createdAt, trending }) => {
  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className={window.innerWidth > 800 ? 'container' : 'article-container'} style={{ paddingRight: '20%', paddingLeft: '20%', paddingTop: '30px' }}>
        <h2>{title}</h2>
        {trending && (
          <span style={{ color: 'red', fontWeight: 'bold' }}>TRENDING</span>
        )}
        <p className="mt-4">By {author}</p>
        <img src={image_url} alt="Image jumbotron" className="img-fluid mb-3" />
        <div dangerouslySetInnerHTML={createMarkup()} />
        <p>Published on: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Article;
