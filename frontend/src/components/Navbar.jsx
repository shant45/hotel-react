import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Hotel Booker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn && (
              <>
                <li className="nav-item me-2">
                  <Link className="btn btn-warning" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success" to="/register">Register</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li className="nav-item me-2">
                  <Link className="btn btn-light" to="/hotels">Hotels</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="btn btn-light" to="/booking">Book</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="btn btn-light" to="/my-bookings">My Bookings</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="btn btn-warning" to="/admin">Admin</Link>
                </li>
                <li className="nav-item me-2">
                  <Link className="btn btn-primary" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar