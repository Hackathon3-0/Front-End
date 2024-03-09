import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import AuthNavigator from "./profile/AuthRouth";
import EducationRouth from "./profile/EducationRouth";
import TeacherRouth from "./profile/TeacherRouth";




const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    nunito: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    nunitoBlack: require("./assets/fonts/Nunito-Black.ttf"),
    nunitoSemiBold: require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
  const userRole = 5;
  const loggedIn = true;

  const SelectedNavigator = () => {
    if (loggedIn) {
      switch (userRole) {
        case 0:
          return <EducationRouth/>;
        case 1:
          return <TeacherRouth/>;
        default:
          return <AuthNavigator/>;
      }
    }
  };

  return (
    <>
      <NativeBaseProvider>
        <StatusBar translucent={false} />
        <NavigationContainer>
          {loggedIn ? <SelectedNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
