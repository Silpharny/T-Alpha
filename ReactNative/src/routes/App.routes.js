import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "../screens/Home"

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
