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
                        <form>
                            <div className="form-group">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" className="form-control mt-1" id="first-name" placeholder="First name"/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="last-name">Last name</label>
                                <input type="password" className="form-control mt-1" id="last-name" placeholder="Last name"/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control mt-1" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control mt-1" id="username" placeholder="Username"/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control mt-1" id="username" placeholder="Password"/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" className="form-control mt-1" id="confirm-password" placeholder="Re-enter your password"/>
                            </div>
                            
                            <button type="submit" className="btn btn-primary mt-4">Sign Up</button>
                        </form>
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
        We are sorry to say that this feature is currently unavailable. We are currently working to add a user sign up and login page. 
      We appreciate your kind patience!
      <br/>
    </div>
  )
}

export default SignUp
