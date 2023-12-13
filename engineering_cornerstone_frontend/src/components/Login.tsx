import NavBar from "./NavBar/NavBar";
import { useState, useEffect, FormEvent } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState({ access: "", refresh: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://engineeringcornerstone.pythonanywhere.com/auth/jwt/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Authentication failed");
      }
  
      const data = await response.json();
      setTokens({ access: data.access, refresh: data.refresh });
    
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    console.log("Updated Access Token:", tokens.access);
    console.log("Updated Refresh Token:", tokens.refresh);
  }, [tokens]);


  return (
    <div className="container">
      <NavBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="username"
                      placeholder="Username or email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      We are sorry to say that this feature is currently unavailable. We are currently working to add a user sign up and login page. 
      We appreciate your kind patience!
    </div>
  );
};

export default Login;