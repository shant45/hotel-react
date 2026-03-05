import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="text-center mt-5">
      <div className="card p-5">
        <h1 className="mb-3">Welcome to Hotel Booking Management System</h1>
        <p className="lead mb-4">Book hotels easily and manage your bookings efficiently.</p>
        
        {isLoggedIn && (
          <div>
            <p className="text-muted mb-4">You are logged in. Start browsing and booking your favorite hotels!</p>
            <button className="btn btn-primary btn-lg me-3" onClick={() => navigate("/hotels")}>
              Browse Hotels
            </button>
            <button className="btn btn-info btn-lg" onClick={() => navigate("/my-bookings")}>
              My Bookings
            </button>
          </div>
        )}

        {!isLoggedIn && (
          <div>
            <p className="text-muted mb-4">Please login or register to get started</p>
            <button className="btn btn-success btn-lg me-3" onClick={() => navigate("/register")}>
              Register Now
            </button>
            <button className="btn btn-primary btn-lg" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
