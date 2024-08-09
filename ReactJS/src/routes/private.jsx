import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export default function Private({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <div></div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }

  return children
}
