import './NavBar.css'
import logo from "./Bright Engineer Cornerstone logo.png"
import ProfileIcon from '../Profile Icon/ProfileIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; // we import the file containing the variable of whether the user is authenticated or not



const NavBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppContext();


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Engineering Cornerstone" style={{ height: '50px' }} />
          <span style={{ color: 'white' }}>Engineering Cornerstone</span>
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
              <Link to="/" className="nav-link" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link" style={{ color: 'white' }}>
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
                style={{ color: 'white' }}
              >
                Topics
              </a>
              <div className="dropdown-menu mega-menu" aria-labelledby="megaMenuDropdown">
                <div className="container">
                                <div className="row pt-3 ">
                                    <div className="col-md-5 custom-col">
                                        <h5>Aerospace and Mechanical</h5>
                                        <a className="dropdown-item" href="#">Aeronautical Engineering</a>
                                        <a className="dropdown-item" href="#">Aerospace Engineering</a>
                                        <a className="dropdown-item" href="#">Automotive Engineering</a>
                                        <a className="dropdown-item" href="#">Mechanical Engineering</a>
                                        <a className="dropdown-item" href="#">Marine Engineering</a>
                                        <a className="dropdown-item" href="#">Robotic Engineering</a>
                                        <a className="dropdown-item" href="#">Mechatronics Engineering</a>

                                    </div>
                                    <div className="col-md-5 custom-col">
                                        <h5>Civil and Environmental</h5>
                                        <a className="dropdown-item" href="#">Civil Engineering</a>
                                        <a className="dropdown-item" href="#">Architectural Engineering</a>
                                        <a className="dropdown-item" href="#">Geotechnical Engineering</a>
                                        <a className="dropdown-item" href="#">Environmental Engineering</a>
                                        <a className="dropdown-item" href="#">Structural Engineering</a>
                                        <a className="dropdown-item" href="#">Transportation Engineering</a>
                                        <a className="dropdown-item" href="#">Urban Engineering</a>

                                    </div>
                                    <div className="col-md-5 custom-col">
                                        <h5>Chemical, Industrial, and Materials</h5>
                                        <a className="dropdown-item" href="#">Chemical Engineering</a>
                                        <a className="dropdown-item" href="#">Biomedical Engineering</a>
                                        <a className="dropdown-item" href="#">Bioprocess Engineering</a>
                                        <a className="dropdown-item" href="#">Industrial Engineering</a>
                                        <a className="dropdown-item" href="#">Materials Engineering</a>
                                        <a className="dropdown-item" href="#">Metallurgical Engineering</a>
                                        <a className="dropdown-item" href="#">Nanotechnology Engineering</a>
                                        <a className="dropdown-item" href="#">Nuclear Engineering</a>
                                        <a className="dropdown-item" href="#">Petroleum Engineering</a>
                                        <a className="dropdown-item" href="#">Pharmaceutical Engineering</a>
                                        <a className="dropdown-item" href="#">Finance Engineering</a>
                                    </div>
                                    <div className="col-md-5 custom-col">
                                        <h5>Electrical and Computer</h5>
                                        <a className="dropdown-item" href="#">Electrical Engineering</a>
                                        <a className="dropdown-item" href="#">Computer Engineering</a>
                                        <a className="dropdown-item" href="#">Computer Science</a>
                                        <a className="dropdown-item" href="#">Cybersecurity Engineering</a>
                                        <a className="dropdown-item" href="#">Data Engineering</a>
                                        <a className="dropdown-item" href="#">Prompt Engineering</a>
                                        <a className="dropdown-item" href="#">Photonics Engineering</a>
                                        <a className="dropdown-item" href="#">Systems Engineering</a>
                                        <a className="dropdown-item" href="#">Telecommunications Engineering</a>
                                        <a className="dropdown-item" href="#">Renewable Energy Engineering</a>
                                    </div>
                                    
                                    </div>
                                    </div>
              </div>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
                {isAuthenticated ? (
                    <li className="nav-item">
                    <ProfileIcon />
                    </li>
                ) : (
                    <>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-link" style={{ color: 'white' }}>
                        Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/login"
                        className="nav-link"
                        style={{ color: 'white' }}
                        onClick={() => navigate('/login')}
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