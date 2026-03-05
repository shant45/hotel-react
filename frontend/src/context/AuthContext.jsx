import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"))
  const [userEmail, setUserEmail] = useState(localStorage.getItem("user_email") || "")

  const login = (token, email) => {
    localStorage.setItem("token", token)
    localStorage.setItem("user_email", email)
    setIsLoggedIn(true)
    setUserEmail(email)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user_email")
    setIsLoggedIn(false)
    setUserEmail("")
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
