import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Layout() {
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">PulseVote</h1>
          <nav className="flex space-x-6 text-lg">
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
            {token ? (
              <>
                <Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
                <button onClick={logout} className="hover:text-gray-200 transition">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
                <Link to="/register" className="hover:text-gray-200 transition">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} PulseVote. All rights reserved.</p>
      </footer>
    </div>
  );
}