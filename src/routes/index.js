import React, { useState, useContext } from "react"

import AuthRoutes from "./Auth.routes"
import AppRoutes from "./App.routes"
import { AuthContext } from "../contexts/AuthContext"
import Loading from "../components/Loading"

export default function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <Loading />
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />
}
