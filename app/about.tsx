import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import Animated, {
    SlideInRight,
    SlideOutLeft
} from "react-native-reanimated";

const AboutPage = () => {
  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutLeft.duration(500)}
      className="h-screen flex items-center justify-center"
    >
      <Text className="font-bold text-5xl text-teal-600 leading-normal">About Page</Text>
      <Link href="/" asChild>
        <Pressable className=" p-3 px-6 bg-purple-600 rounded-xl mt-10">
          <Text className="text-xl font-bold   text-white">Home</Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
};

export default AboutPage;
