import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Layout.css";

export default function Layout() {
  const { token, logout } = useAuth();

  return (
    <div className="layout-container">
      {/* Navbar */}
      <nav className="layout-navbar">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand">
            <span className="brand-text">PulseVote</span>
          </Link>
          
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            {token ? (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <button onClick={logout} className="nav-link logout-btn">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link register-link">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="layout-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} PulseVote. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}