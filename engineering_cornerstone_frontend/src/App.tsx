import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingHomePage/LandingPage";
import ArticlePage from "./components/ArticlePage";
import Search from "./components/Search/Search";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ReadWatchLearnPage from "./components/ReadWatchLearnPage/ReadWatchLearnPage";
import { AppProvider } from "./AppContext"; // Update the path

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route
            path="/articles/:created_at_date/:slug"
            element={<ArticlePage />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Search />} />{" "}
          {/* Add a route with a parameter for search query */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/readwatchlearn" element={<ReadWatchLearnPage main_heading="Aerospace and Mechanical"/>}/>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
