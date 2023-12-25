import NavBar from "./NavBar/NavBar";
import { useState, useEffect, FormEvent } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tokens, setTokens] = useState({ access: "", refresh: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/auth/jwt/create/", {
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
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const accessToken = tokens.access;
    if (accessToken) {
      console.log(accessToken);
      console.log(tokens.refresh);
      fetchUserProfile(accessToken);
    }
  }, [tokens]);

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/users/me/", {
        method: "GET",  // Use GET instead of POST
        headers: {
          "Content-Type": "application/json",
          "Authorization": `JWT ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }
  
      const userData = await response.json();
      console.log("User Profile Data:", userData);
    } catch (error) {
      console.error("Fetch user profile error:", error);
    }
  };
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
                  <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  {error && <p className="text-danger mt-2">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {userData}
      </div>
    </div>
  );
};


// the next step after the login is successful and the user info is given, 
// store the following data in the HttpOnly Cookie
export default Login;