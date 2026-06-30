import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Ionicons from "@expo/vector-icons/Ionicons";

import FirstTab from "./first";
import SecondTab from "./second";
import ThirdTab from "./third";

const TabLayout = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "first",
      icon: "home-sharp",
    },
    {
      key: "second",
      icon: "list-sharp",
    },
    {
      key: "third",
      icon: "person-sharp",
    },
  ]);

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
    third: ThirdTab,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      commonOptions={{
        icon: ({ route, color }) => (
          <Ionicons
            name={route.icon as any}
            size={24}
            color={color}
          />
        ),
      }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          activeColor="purple"
          inactiveColor="gray"
          style={{
            backgroundColor: "black",
          }}
          indicatorStyle={{
            backgroundColor: "purple",
            height: 3,
          }}
        />
      )}
    />
  );
};

export default TabLayout;