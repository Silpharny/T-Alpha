import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"
import Routes from "./src/routes"
import AuthProvider from "./src/contexts/AuthContext"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="default" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
