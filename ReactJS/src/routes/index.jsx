import { Routes, Route } from "react-router-dom"

import Private from "./private"

import Home from "../pages/Home"
import Auth from "../pages/Auth"

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />

      <Route
        path="/home"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
    </Routes>
  )
}
