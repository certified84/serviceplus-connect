import { customFontLocation } from './constants';
import { useFonts } from "expo-font";
import Dashboard from './screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import NavigationRoutes from './navigation'

export default function App() {
  // FONT CONFIG
  const [fontsLoaded] = useFonts(customFontLocation);
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
}
