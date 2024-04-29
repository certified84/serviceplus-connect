import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { customFontLocation } from './constants';
import { useFonts } from "expo-font";

export default function App() {
  // FONT CONFIG
  const [fontsLoaded] = useFonts(customFontLocation);
  if (!fontsLoaded) return null;
  
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
