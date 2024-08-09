import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import api from "../../services/api"

export default function Home() {
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    async function loadProducts() {
      await api
        .get("api/products/get-all-products")
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error("Error sending data: ", error.response)
        })
    }
    loadProducts()
  }, [])

  return (
    <main className="flex w-screen h-screen flex-col justify-center items-center bg-black">
      <h1 className="text-white font-bold mb-6">Api: "Unauthorized"</h1>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded w-[200px] "
        onClick={logout}
      >
        Sair
      </button>
    </main>
  )
}
