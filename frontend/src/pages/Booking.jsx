import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import API from '../services/api'
import { toast } from 'react-toastify'

const Booking = () => {
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [hotel, setHotel] = useState(location.state?.hotel || '')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')

  const bookRoom = async () => {
    try {
      const res = await API.post('/book', {
        user_email: email,
        hotel_name: hotel,
        checkin,
        checkout
      })

      if(res.data.error) {
        toast.error(res.data.error)
      } else {
        toast.success('Room booked successfully')
        setEmail('')
        setHotel('')
        setCheckin('')
        setCheckout('')
      }
    } catch(err) {
      toast.error('Booking failed')
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Book Hotel</h2>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Hotel Name</label>
              <input
                type="text"
                className="form-control"
                value={hotel}
                disabled
                placeholder="Hotel name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Check-in Date</label>
              <input
                type="date"
                className="form-control"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Check-out Date</label>
              <input
                type="date"
                className="form-control"
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>

            <button
              className="btn btn-success w-100"
              onClick={bookRoom}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking