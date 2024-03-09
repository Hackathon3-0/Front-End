import React from "react";
// screens

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// screens and components
import {
  Ai,
  Blog,
  BlogRead,
  FindTeacher,
  Home,
  Message,
  Profile
} from "../screens/index";
import Notification from "../components/Notification";

const BusinessRouter = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const BusinessBottomTab = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          height: 60,
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "BussEmployeeJobs") {
            iconName = focused
              ? require("../assets/img/mustache.png")
              : require("../assets/img/mustache-out.png");
          } else if (route.name === "BussProfile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "BussCharts") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          }
          if (typeof iconName === "string") {
            return <Ionicons name={iconName} size={size} color={"black"} />;
          } else {
            return (
              <Image
                source={iconName}
                style={{ width: 60, height: 40 }}
                resizeMode="contain"
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="BussCharts"
        component={BussCharts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BussEmployeeJobs"
        component={BussEmployeeJobs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BussProfile"
        component={BussProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  const BusinessNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // geçiş animasyonu
        cardStyleInterpolator: ({ current }) => ({
          cardStyle: {
            opacity: current.progress,
          },
        }),
      }}
    >
      <Stack.Screen name="businessTab" component={BusinessBottomTab} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="createEmployee" component={CreateEmployee} />
      <Stack.Screen name="BussProfileEdit" component={BussProfileEdit} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );

  return <BusinessNavigator />;
};

export default BusinessRouter;
