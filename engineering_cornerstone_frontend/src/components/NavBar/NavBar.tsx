import "./NavBar.css";
import logo from "./Bright Engineer Cornerstone logo.png";
import ProfileIcon from "../Profile Icon/ProfileIcon";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext"; // we import the file containing the variable of whether the user is authenticated or not

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Reset authentication state
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark whole-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Engineering Cornerstone"
            style={{ height: "50px" }}
          />
          <span style={{ color: "white" }}>Engineering Cornerstone</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className="nav-link"
                style={{ color: "white" }}
              >
                Search
              </Link>
            </li>
            {/* Add your other navigation items here */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="megaMenuDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Topics
              </a>
              <div
                className="dropdown-menu mega-menu"
                aria-labelledby="megaMenuDropdown"
              >
                <div className="container">
                  <div className="row pt-3 ">
                    <div className="col-md-5 custom-col">
                      <h5>Aerospace and Mechanical</h5>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=aeronautical+engineering"
                      >
                        Aeronautical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=aerospace+engineering"
                      >
                        Aerospace Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=automotive+engineering"
                      >
                        Automotive Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=mechanical+engineering"
                      >
                        Mechanical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=marine+engineering"
                      >
                        Marine Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=robotic+engineering"
                      >
                        Robotic Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=mechatronics+engineering"
                      >
                        Mechatronics Engineering
                      </a>
                    </div>
                    <div className="col-md-5 custom-col">
                      <h5>Civil and Environmental</h5>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=civil+engineering"
                      >
                        Civil Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=architectural+engineering"
                      >
                        Architectural Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=geotechnical+engineering"
                      >
                        Geotechnical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=environmental+engineering"
                      >
                        Environmental Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=structural+engineering"
                      >
                        Structural Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=transportation+engineering"
                      >
                        Transportation Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=urban+engineering"
                      >
                        Urban Engineering
                      </a>
                    </div>
                    <div className="col-md-5 custom-col">
                      <h5>Chemical, Industrial, and Materials</h5>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=chemical+engineering"
                      >
                        Chemical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=biomedical+engineering"
                      >
                        Biomedical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=bioprocess+engineering"
                      >
                        Bioprocess Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=industrial+engineering"
                      >
                        Industrial Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=materials+engineering"
                      >
                        Materials Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=metallurgical+engineering"
                      >
                        Metallurgical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=nanotechnology+engineering"
                      >
                        Nanotechnology Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=nuclear+engineering"
                      >
                        Nuclear Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=petroleum+engineering"
                      >
                        Petroleum Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=pharmaceutical+engineering"
                      >
                        Pharmaceutical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=finance+engineering"
                      >
                        Finance Engineering
                      </a>
                    </div>
                    <div className="col-md-5 custom-col">
                      <h5>Electrical and Computer</h5>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=electrical+engineering"
                      >
                        Electrical Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=computer+engineering"
                      >
                        Computer Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=computer-science"
                      >
                        Computer Science
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=cybersecurity+engineering"
                      >
                        Cybersecurity Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=data+engineering"
                      >
                        Data Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=prompt+engineering"
                      >
                        Prompt Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=photonics+engineering"
                      >
                        Photonics Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=systems+engineering"
                      >
                        Systems Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=telecommunications+engineering"
                      >
                        Telecommunications Engineering
                      </a>
                      <a
                        className="dropdown-item"
                        href="/#/search?q=renewable+energy+engineering"
                      >
                        Renewable Energy Engineering
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                {" "}
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link mr-2"
                    onClick={handleLogout}
                    style={{ color: "white" }}
                  >
                    Logout
                  </button>
                </li>
                <li className="nav-item">
                  <ProfileIcon />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/sign-up"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
