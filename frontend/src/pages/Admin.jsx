import {useState, useEffect} from "react"
import API from "../services/api"
import { toast } from "react-toastify"

function Admin(){

const [hotels,setHotels] = useState([])
const [editHotel,setEditHotel] = useState(null)
const [name,setName]=useState("")
const [location,setLocation]=useState("")
const [price,setPrice]=useState("")
const [rooms,setRooms]=useState("")
const [imageUrl,setImageUrl]=useState("")

const fetchHotels = async () => {
  const res = await API.get("/hotels")
  setHotels(res.data)
}

useEffect(()=>{ fetchHotels() },[])

const startEdit = (hotel) => {
  setEditHotel(hotel.name)
  setName(hotel.name)
  setLocation(hotel.location)
  setPrice(hotel.price)
  setRooms(hotel.rooms)
  setImageUrl(hotel.image_url || "")
}

const clearForm = () => {
  setEditHotel(null)
  setName("")
  setLocation("")
  setPrice("")
  setRooms("")
  setImageUrl("")
}

const addHotel = async ()=>{

 try{
  await API.post("/add-hotel",{
   name,
   location,
   price,
   rooms,
   image_url: imageUrl
  })
  toast.success("Hotel added successfully")
  clearForm()
  fetchHotels()
 }catch(err){
  toast.error("Failed to add hotel")
 }

}

const updateHotel = async () => {

  if(!editHotel) return

  try{
    await API.put(`/update-hotel/${editHotel}`,{
      name,
      location,
      price,
      rooms,
      image_url: imageUrl
    })

    toast.success("Hotel updated successfully")
    clearForm()
    fetchHotels()

  }catch(err){
    toast.error("Update failed")
  }

}

const deleteHotel = async (hotelName) => {

  const confirmDelete = window.confirm(`Are you sure you want to delete ${hotelName}?`)
  
  if(!confirmDelete) return
  
  try{
    await API.delete(`/delete-hotel/${hotelName}`)
    toast.success("Hotel deleted successfully")
    fetchHotels()
  }catch(err){
    toast.error("Failed to delete hotel")
  }

}

return(

<div>

<div className="row">
  <div className="col-md-6">
    <div className="card p-4">
      <h3>{editHotel ? "Edit Hotel" : "Add Hotel"}</h3>

      <input
      className="form-control mb-2"
      placeholder="Hotel Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Location"
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Price"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Rooms"
      value={rooms}
      onChange={(e)=>setRooms(e.target.value)}
      />

      <input
      className="form-control mb-3"
      placeholder="Image URL"
      value={imageUrl}
      onChange={(e)=>setImageUrl(e.target.value)}
      />

      <div className="d-flex gap-2">
        {editHotel ? (
          <>
            <button className="btn btn-primary w-100" onClick={updateHotel}>Update Hotel</button>
            <button className="btn btn-secondary" onClick={clearForm}>Cancel</button>
          </>
        ) : (
          <button className="btn btn-success w-100" onClick={addHotel}>Add Hotel</button>
        )}
      </div>
    </div>
  </div>

  <div className="col-md-6">
    <div className="card p-4">
      <h3>Hotels List</h3>
      <div style={{maxHeight: '500px', overflowY: 'auto'}}>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Rooms</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((h,i)=>(
              <tr key={i}>
                <td>{h.name}</td>
                <td>{h.location}</td>
                <td>${h.price}</td>
                <td>{h.rooms}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={()=>startEdit(h)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={()=>deleteHotel(h.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

</div>

)

}

export default Admin