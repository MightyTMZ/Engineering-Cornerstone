import DOMPurify from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = ({ title, image_url, content, author, createdAt }) => {
  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="container" style={{ paddingRight: '20%', paddingLeft: "20%", paddingTop: '30px' }}>
        <h2>{title}</h2>
        <img src={image_url} alt="Image jumbotron" className="img-fluid mb-3"/>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <p className="mt-4">Author: {author}</p>
        <p>Published on: {new Date(createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Article;
