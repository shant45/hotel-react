import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const registerUser = async () => {

 if(!name || !email || !password){

  toast.warning("All fields are required")
  return
 }

 try{

  const res = await API.post("/register",{
   name,
   email,
   password
  })

  if(res.data.error){

   toast.error(res.data.error)

  }else{

   toast.success("Registration successful")

   setTimeout(()=>{
    navigate("/login")
   },1500)

  }

 }catch(err){

  toast.error("Registration failed")

 }

}

return(

<div className="col-md-4 mx-auto">

<h3 className="mb-3">Register</h3>

<input
className="form-control mb-2"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-2"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="btn btn-success w-100"
onClick={registerUser}
>
Register
</button>

</div>

)

}

export default Register