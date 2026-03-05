import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {
  const navigate = useNavigate()
  const { userEmail, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    toast.success("Logged out successfully")
    navigate("/")
  }

  if (!userEmail) {
    return (
      <div className="text-center mt-5">
        <h3>Please login to view your profile</h3>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/login")}>
          Go to Login
        </button>
      </div>
    )
  }

  return (
    <div className="col-md-6 mx-auto mt-5">
      <div className="card p-4">
        <h3 className="card-title mb-4">My Profile</h3>
        
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label"><strong>Email:</strong></label>
            <p className="form-control-plaintext bg-light p-2 rounded">{userEmail}</p>
          </div>

          <div className="mt-4">
            <button className="btn btn-primary me-2" onClick={() => navigate("/my-bookings")}>
              My Bookings
            </button>
            <button className="btn btn-warning" onClick={() => navigate("/hotels")}>
              Browse Hotels
            </button>
          </div>

          <hr className="my-4" />

          <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
