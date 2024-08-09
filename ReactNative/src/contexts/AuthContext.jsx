import { createContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../services/api"

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)

  async function storageUser(data) {
    await AsyncStorage.setItem("@t-alpha", JSON.stringify(data))
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@t-alpha")

      if (storagedUser) {
        setUser(JSON.parse(storagedUser))
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false)
      }
    }
    loadStorageData()
  }, [])

  async function register(userData) {
    setAuthLoading(true)

    await api
      .post("api/auth/register", userData)
      .then((response) => {
        setUser(response.config.data)
        storageUser(response.config.data)
        setAuthLoading(false)
      })
      .catch((error) => {
        alert("Erro ao se cadastrar, tente novamente")
        console.error("Error sending data: ", error.response.data)
        setAuthLoading(false)
      })
  }

  async function login(userData) {
    setAuthLoading(true)

    await api
      .post("api/auth/login", userData)
      .then((response) => {
        setUser(response.config.data)
        storageUser(response.config.data)
        setAuthLoading(false)
      })
      .catch((error) => {
        alert("Erro ao fazer login, verifique seus dados e tente novamente")
        console.error("Error sending data: ", error.response.data)
        setAuthLoading(false)
      })
  }

  async function logout() {
    await AsyncStorage.removeItem("@t-alpha")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        isAuthenticated: !!user,
        loading,
        authLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
