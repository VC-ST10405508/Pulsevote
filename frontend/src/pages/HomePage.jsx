import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-vh-100 bg-light w-100">
      <div className="w-100 min-vh-100 d-flex flex-column justify-content-center py-5">
        
        {/* Header */}
        <div className="container text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Welcome to PulseVote</h2>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            A modern voting platform where you can register, log in, and access your personalized dashboard.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="container-fluid px-0">
          <div className="row justify-content-center mx-0">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                
                {/* Login Card */}
                <div className="col">
                  <div className="card h-100 text-center shadow-sm border-0">
                    <div className="card-body p-4">
                      <div className="display-1 mb-3">🔐</div>
                      <h5 className="card-title fw-bold">Login</h5>
                      <p className="card-text text-muted">Already have an account? Sign in here.</p>
                      <Link to="/login" className="btn btn-primary mt-2">Go</Link>
                    </div>
                  </div>
                </div>

                {/* Register Card */}
                <div className="col">
                  <div className="card h-100 text-center shadow-sm border-0">
                    <div className="card-body p-4">
                      <div className="display-1 mb-3">📝</div>
                      <h5 className="card-title fw-bold">Register</h5>
                      <p className="card-text text-muted">New user? Create your account here.</p>
                      <Link to="/register" className="btn btn-primary mt-2">Go</Link>
                    </div>
                  </div>
                </div>

                {/* Dashboard Card */}
                <div className="col">
                  <div className="card h-100 text-center shadow-sm border-0">
                    <div className="card-body p-4">
                      <div className="display-1 mb-3">📊</div>
                      <h5 className="card-title fw-bold">Dashboard</h5>
                      <p className="card-text text-muted">Access your personalized voting dashboard.</p>
                      <Link to="/dashboard" className="btn btn-primary mt-2">Go</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}