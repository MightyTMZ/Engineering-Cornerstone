import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import Search from "./components/Search/Search";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/articles/:created_at_date/:slug" element={<ArticlePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:query" element={<Search />} />        {/* Add a route with a parameter for search query */}
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;