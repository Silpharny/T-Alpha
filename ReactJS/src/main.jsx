import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AuthProvider from "./contexts/AuthContext.jsx"
import { BrowserRouter } from "react-router-dom"

import RoutesApp from "./routes/index.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)
