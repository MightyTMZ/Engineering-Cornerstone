import './NavBar.css'

const NavBar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Engineering Cornerstone</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search/">Search</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="megaMenuDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
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
            </div>
        </div>
    </nav>
      </>
    );
  };
  
  export default NavBar;
  