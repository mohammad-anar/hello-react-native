import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const NameDynamicPage = () => {
  const { name } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-black font-bold">
        Hello <Text className=" text-purple-600">{name}</Text>.
      </Text>
      <Text className="text-lg mt-5">This is your info.</Text>
    </View>
  );
};

export default NameDynamicPage;
