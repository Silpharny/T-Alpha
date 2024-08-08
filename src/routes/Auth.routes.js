import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Auth from "../screens/Auth"

const Stack = createNativeStackNavigator()

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  )
}
