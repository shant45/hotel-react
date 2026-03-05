import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const loginUser = async () => {
    if(!email || !password){
      toast.warning("All fields are required")
      return
    }

    try {
      const res = await API.post(`/login?email=${email}&password=${password}`)

      if(res.data.token){
        login(res.data.token, email)
        toast.success("Login successful")
        navigate("/")
      }else{
        toast.error(res.data.error)
      }
    } catch (error) {
      toast.error("Login failed")
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              className="btn btn-primary w-100"
              onClick={loginUser}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login