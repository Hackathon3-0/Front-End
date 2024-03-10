import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  HomeTeacher
} from "../screens/index";

const TeacherRouth = () => {
  const Stack = createStackNavigator();

  const AuthNavigator = () => (
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
      <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
    </Stack.Navigator>
  );

  return <AuthNavigator />;
};

export default TeacherRouth;
