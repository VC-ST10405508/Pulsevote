import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-content">
      {/* Header */}
      <div className="home-header">
        <h2>Welcome to PulseVote</h2>
        <p>A modern voting platform where you can register, log in, and access your personalized dashboard.</p>
      </div>

      {/* Cards Grid */}
      <div className="home-cards-grid">
        {/* Login Card */}
        <div className="home-card">
          <div className="card-icon">🔐</div>
          <div className="card-content">
            <h3>Login</h3>
            <p>Already have an account? Sign in here.</p>
            <Link to="/login" className="card-button">Go</Link>
          </div>
        </div>

        {/* Register Card */}
        <div className="home-card">
          <div className="card-icon">📝</div>
          <div className="card-content">
            <h3>Register</h3>
            <p>New user? Create your account here.</p>
            <Link to="/register" className="card-button">Go</Link>
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="home-card">
          <div className="card-icon">📊</div>
          <div className="card-content">
            <h3>Dashboard</h3>
            <p>Access your personalized voting dashboard.</p>
            <Link to="/dashboard" className="card-button">Go</Link>
          </div>
        </div>
      </div>
    </div>
  );
}