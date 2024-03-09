import React from "react";
// screens

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

// screens and components
import {
  Ai,
  Blog,
  BlogRead,
  FindTeacher,
  Home,
  Message,
  Profile,
  ABC,
  TeacherDetail
} from "../screens/index";

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

          if (route.name === "Ai") {
            iconName = focused ? "barcode" : "barcode-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Blog") {
            iconName = focused ? "book" : "book-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            color = focused ? "#6CBA0E" : "black";
          } else if (route.name === "FindTeacher") {
            iconName = focused ? "grid" : "grid-outline";
            color = focused ? "#6CBA0E" : "black";
          }
          if (typeof iconName === "string") {
            return <Ionicons name={iconName} size={size} color={color} />;
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
        name="FindTeacher"
        component={FindTeacher}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Ai" component={Ai} options={{ headerShown: false }} />

      <Tab.Screen
        name="Profile"
        component={Profile}
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
      <Stack.Screen name="BusinessBottomTab" component={BusinessBottomTab} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="BlogRead" component={BlogRead} />

      {/* <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="createEmployee" component={CreateEmployee} />
      <Stack.Screen name="BussProfileEdit" component={BussProfileEdit} /> */}
    </Stack.Navigator>
  );

  return <BusinessNavigator />;
};

export default BusinessRouter;
