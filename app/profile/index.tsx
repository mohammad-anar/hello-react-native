import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ProfilePage = () => {
  const router = useRouter();

  return (
    <View>
      <Text className="text-4xl font-bold text-teal-600 mb-5">
        Profile Page
      </Text>
      <Pressable
        className="bg-purple-600 px-6 py-3 rounded-xl"
        onPress={() => router.push("/profile/settings")}
      >
        <Text>Settings</Text>
      </Pressable>
      <Pressable
        className="bg-purple-600 px-6 py-3 rounded-xl"
        onPress={() => router.push("/")}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

export default ProfilePage;
