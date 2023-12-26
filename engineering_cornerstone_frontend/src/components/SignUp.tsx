// import React from 'react'
import NavBar from './NavBar/NavBar'

const SignUp = () => {
  return (
    <div className="container">
    <NavBar/>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Join Engineering Cornerstone today!</h4>
                    </div>
                    <div className="card-body">
                        We are currently not offering a sign up account form. 
                        If you are interested in having an account, please fill in the form 
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIdzhFo07AWGFMLsC5l4FrBPTpbCdJq8SIhrT5P6t6sQI-KQ/viewform"
                        style={{textDecoration: 'none'}}> here</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"></script>
      <br/>
    </div>
  )
}

export default SignUp
