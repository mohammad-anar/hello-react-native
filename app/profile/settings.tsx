import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const SettingPage = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Settings Page</Text>
      <Pressable
        className="bg-purple-600 px-6 py-3 rounded-xl"
        onPress={() => router.push("/profile")}
      >
        <Text>Profile</Text>
      </Pressable>
    </View>
  );
};

export default SettingPage;
