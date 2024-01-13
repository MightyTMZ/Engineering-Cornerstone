import "./ArticleFooter.css";

const ArticleFooter = () => {
  return (
    <div className="container mb-4">
      <div className="row">
        <h4 className="col">Read, Watch, Learn</h4>
        <h4 className="col">Interact</h4>
        <h4 className="col">Historical</h4>
      </div>

      <div className="row">
        <div className="col">Aerospace and Mechanical</div>
        <div className="col">Community Forum</div>
        <div className="col">Biographies</div>
      </div>
      <div className="row">
        <div className="col">Chemical, Industrial, Materials</div>
        <div className="col">Tutorials</div>
        <div className="col">Case Studies</div>
      </div>
      <div className="row">
        <div className="col">Civil and Environmental</div>
        <div className="col">How-to</div>
        <div className="col">Reviews</div>
      </div>
      <div className="row">
        <div className="col">Electrical and Computer</div>
        <div className="col">Project Showcases</div>
        <div className="col">{/* Empty to leave space*/}</div>
      </div>
      <div className="row">
        <div className="col">Trending Topics & News</div>
        <div className="col">Start-up Showcases</div>
        <div className="col">{/* Empty to leave space*/}</div>
      </div>
      <div className="row">
        <div className="col">Engineering on the World and International Stage</div>
        <div className="col">Events</div>
        <div className="col">{/* Empty to leave space*/}</div>
      </div>
      <div className="row">
        <div className="col">{/* Empty to leave space*/}</div>
        <div className="col">Polls and Surveys</div>
        <div className="col">{/* Empty to leave space*/}</div>
      </div>
      
    </div>
  );
};

export default ArticleFooter;
