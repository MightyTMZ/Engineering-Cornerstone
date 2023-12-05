const LandingPage = () => {
  // Sample data for the recent articles
  const recentArticles = [
    { title: 'Article 1', content: 'Content for Article 1' },
    { title: 'Article 2', content: 'Content for Article 2' },
    { title: 'Article 3', content: 'Content for Article 3' },
  ];

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <p className="pt-3">Your Source for Engineering news, insights and more!</p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-3">Latest</h2>
              <h5>Trending article 1</h5> {/* Make sure to change this to a link element so the user can click on it */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta quas possimus asperiores natus recusandae doloribus maiores est!</p>
              <h5>Trending article 2</h5> {/* Make sure to change this to a link element so the user can click on it */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta quas possimus asperiores natus recusandae doloribus maiores est!</p>
              <h5>Trending article 3</h5> {/* Make sure to change this to a link element so the user can click on it */}
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dicta quas possimus asperiores natus recusandae doloribus maiores est!</p>
            
            </div>
            <div className="col-lg-6">
              <img
                src="https://media.istockphoto.com/id/1154341677/photo/industry-and-technology-concept-industry-4-0.jpg?s=612x612&w=0&k=20&c=UgbGbl1oTYa837cA2UQcteWD3Rt_W1Pzujo_0i9Q82E="
                alt="Engineering Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="recent-articles">
        <div className="container">
          <h2>Recent Articles</h2>
          <div className="row">
            {recentArticles.map((article, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div
                  className="article-box"
                  style={{ width: '100%', height: '180px', backgroundColor: 'blue', padding: '20px', color: 'white' }}
                >
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="mb-4">Key Features</h2>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <h4>Breaking News</h4>
              <p>Stay up-to-date with the latest breaking news in the fast-evolving engineering world we have today.</p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>In-Depth Analysis</h4>
              <p>Explore in-depth articles and analysis on engineering topics and innovations.</p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Community Engagement</h4>
              <p>Connect with fellow engineers and professionals in our vibrant community.</p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Incredible Insights</h4>
              <p>Hear the insighful voices and inspiration of aspiring, current, or former engineers. </p>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Learning</h4>
              <p>Learn about how the inventions of the past centuries brought us to the engineering world we have today!</p>
            </div>
            <div className="col-lg-4 mt-4">
               <h4>Innovation Unveiled</h4>
               <p>Discover the latest tech trends reshaping engineering and how it can inspire you!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blank Div Box 1 */}
      <section className="blank-box" style={{ width: '100%', height: '200px', backgroundColor: 'blue' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blank-box-content">
                {/* Add content or leave blank as a placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Receive the latest news and updates directly to your inbox.</p>
          {/* Add a newsletter signup form here */}
        </div>
      </section>

      {/* Blank Div Box 2 */}
      <section className="blank-box" style={{ width: '100%', height: '180px', backgroundColor: 'blue' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blank-box-content">
                {/* Add content or leave blank as a placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

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
