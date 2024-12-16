import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Financy, Profiles, Request, Card } from "./src/screens";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="inicio"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Financy"
          component={Financy}
          options={{
            headerShown: false,
            tabBarLabel: "Financeiro",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Request"
          component={Request}
          options={{
            headerShown: false,
            tabBarLabel: "Requisições",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat-bubble" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profiles"
          component={() => (
            <Stack.Navigator initialRouteName="Profiles">
              <Stack.Screen
                name="Profiles"
                component={Profiles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cards"
                component={Card}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
