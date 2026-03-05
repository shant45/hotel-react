import React, { useState, useEffect } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await API.get('/hotels')
        setHotels(res.data)
      } catch (error) {
        console.error('Error fetching hotels:', error)
      }
    }
    fetchHotels()
  }, [])

  return (
    <div>
      <h2>Available Hotels</h2>

      <input
        className="form-control mb-3"
        placeholder="Search Hotel"
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="row">
        {hotels
          .filter(h => h.name.toLowerCase().includes(search.toLowerCase()))
          .map((hotel,index)=>(
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                {hotel.image_url && (
                  <img src={hotel.image_url} className="card-img-top" alt={hotel.name} style={{height: '200px', objectFit: 'cover'}} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">Location: {hotel.location}</p>
                  <p className="card-text">Price: ${hotel.price}/night</p>
                  <p className="card-text">Available Rooms: {hotel.rooms}</p>
                  <button 
                    className="btn btn-success"
                    onClick={()=>navigate("/booking",{ state:{ hotel: hotel.name } })}
                  >
                    Book Room
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Hotels