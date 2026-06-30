import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: "purple",
          drawerInactiveTintColor: "gray",
          drawerStyle: {
            backgroundColor: "black",
          },
          drawerType: "front",

        }}
        
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: ({ color }) => {
              return <Ionicons name="home" size={20} color={color} />;
            },
          }}
        />

        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About",
            drawerIcon: ({ color }) => {
              return <Ionicons name="person-sharp" size={20} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Tabs",
            title: "Tabs",
            drawerIcon: ({ color }) => {
              return <Ionicons name="list" size={20} color={color} />;
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
