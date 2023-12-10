import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/LandingPage";
import ArticlePage from "./components/ArticlePage";
import Search from "./components/Search/Search";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles/:created_at_date/:slug" element={<ArticlePage />} />
        <Route path="/search" element={<Search />} />
        {/* Add a route with a parameter for search query */}
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;