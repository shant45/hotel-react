import axios from "axios"

const API = axios.create({
    baseURL: "https://hotel-react-1.onrender.com/"
})

export default API