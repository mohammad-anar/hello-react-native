import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const UserInfo = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const handlePress = () => {
    const userName = name.trim();
    console.log(userName)
    if (!userName) {
        return;
    }
    router.push(`/${userName}`);
  };
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 items-center justify-center p-5"
    >
      <Text className="text-5xl font-bold text-teal-600 mb-5">User Form</Text>

      <View className="w-full bg-white p-5 rounded-xl">
        <Text className="text-md font-bold mb-2">Name</Text>
        <TextInput
          placeholder="Type your name"
          value={name}
          onChangeText={setName}
          className="border rounded-lg px-6 w-full"
        />
        <Pressable
          onPress={handlePress}
          className="flex-row items-center justify-center gap-2 mt-5 bg-purple-600 px-6 py-3 rounded-xl"
        >
          <Ionicons name="paper-plane" size={20} color="white" />
          <Text className="text-white font-bold">Submit</Text>
        </Pressable>
      </View>

      <Link href="/" asChild>
        <Pressable className="flex-row items-center gap-2 mt-10 bg-purple-600 px-6 py-3 rounded-xl">
          <Ionicons name="home-sharp" size={20} color="white" />

          <Text className="text-white font-bold">Home</Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
};

export default UserInfo;
