import "./global.css";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 mt-20">
        Fuck Error!
      </Text>

      <StatusBar style="auto"/>
    </View>
  );
}
