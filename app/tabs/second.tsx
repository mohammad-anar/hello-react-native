import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from "react-native-reanimated";

const SecondTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 items-center justify-center"
    >
      <Text className="text-5xl font-bold text-teal-600">Second tab</Text>

      <Link href="/" asChild>
        <Pressable className="flex-row items-center gap-2 mt-10 bg-purple-600 px-6 py-3 rounded-xl">
          <Ionicons name="home-sharp" size={20} color="white" />

          <Text className="text-white font-bold">Home</Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
};

export default SecondTab;
