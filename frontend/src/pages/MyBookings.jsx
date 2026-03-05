import {useState} from "react"
import API from "../services/api"

function MyBookings(){

const [email,setEmail]=useState("")
const [bookings,setBookings]=useState([])

const getBookings = async ()=>{

 const res = await API.get(`/bookings/${email}`)

 setBookings(res.data)

}

return(

<div>

<h3>My Bookings</h3>

<input
className="form-control mb-2"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<button
className="btn btn-primary mb-3"
onClick={getBookings}
>
Load Bookings
</button>

{bookings.map((b,i)=>(

<div key={i} className="card mb-2">

<div className="card-body">

<h5>{b.hotel_name}</h5>
<p>Checkin: {b.checkin}</p>
<p>Checkout: {b.checkout}</p>

</div>

</div>

))}

</div>

)

}

export default MyBookings