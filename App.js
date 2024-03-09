import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { Checkbox } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <View className="flex-1 items-center justify-center bg-blue-500">
        <Text>Open up App.js to start working on your app!</Text>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}
