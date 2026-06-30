import { Link, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

import "../global.css";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Page() {
  const router = useRouter();

  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutLeft.duration(500)}
      className="flex-1 items-center justify-center"
    >
      <Text className="text-5xl font-bold text-purple-600">Home Page</Text>

      <Link href="/about" asChild>
        <Pressable className="bg-teal-600 mt-10 px-6 py-3 rounded-xl">
          <Text className="text-2xl font-bold text-white">About Us</Text>
        </Pressable>
      </Link>

      <Pressable
        onPress={() => router.push("/tabs/first")}
        className="bg-purple-600 mt-10 px-6 py-3 rounded-xl"
      >
        <Text className="text-2xl font-bold text-white">Tab Routes</Text>
      </Pressable>

      <Link href="/userInfo" asChild>
        <Pressable className="flex-row items-center gap-2 mt-10 bg-purple-600 px-6 py-3 rounded-xl">
          <Ionicons name="person-sharp" size={20} color="white" />

          <Text className="text-white font-bold">UserInfo</Text>
        </Pressable>
      </Link>
      <Link href="/profile" asChild>
        <Pressable className="flex-row items-center gap-2 mt-10 bg-pink-600 px-6 py-3 rounded-xl">
          <Ionicons name="person-sharp" size={20} color="white" />

          <Text className="text-white font-bold">Profile</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable className="flex-row items-center gap-2 mt-10 bg-green-600 px-6 py-3 rounded-xl">
          <Ionicons name="person-sharp" size={20} color="white" />

          <Text className="text-white font-bold">Register</Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
}
