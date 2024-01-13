import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useAppContext } from "../AppContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAppContext();

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
      // Assuming tokens and user info should be stored in the browser's local storage
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      setError(""); // Clear any previous errors
      navigate("/home"); // Redirect to the home page
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      console.log(accessToken);
      fetchUserProfile(accessToken);
    }
  }, [setIsAuthenticated]);

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const response = await fetch(
        "https://engineeringcornerstone.pythonanywhere.com/auth/users/me/",
        {
          method: "GET", // Use GET instead of POST
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const userData = await response.json();
      console.log("User Profile Data:", userData);
      setIsAuthenticated(true);
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
                  <button
                    type="submit"
                    className="btn btn-primary mt-4"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  {error && <p className="text-danger mt-2">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Login;
