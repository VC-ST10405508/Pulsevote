import { useState } from "react";
import api from "../api";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      const res = await api.post("/auth/register", form);
      login(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>PulseVote</h2>
          <p>Create Your Account</p>
        </div>
        
        <div className="auth-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="auth-btn">
              Register
            </button>
          </form>

          {message && (
            <div className="alert-message">
              {message}
            </div>
          )}

          <div className="auth-link">
            <p>
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}